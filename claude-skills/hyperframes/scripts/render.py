#!/usr/bin/env python3
"""Render an HTML animation (window.seek/window.DURATION_MS contract) to MP4."""

import argparse
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("html", help="Path to the HTML animation file")
    p.add_argument("out", help="Output .mp4 path")
    p.add_argument("--fps", type=int, default=30)
    p.add_argument("--width", type=int, default=1920)
    p.add_argument("--height", type=int, default=1080)
    args = p.parse_args()

    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg not found on PATH. Install it (e.g. `apt install ffmpeg` / `brew install ffmpeg`).")
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        sys.exit("playwright not installed. Run: pip install playwright && playwright install chromium")

    html_path = Path(args.html).resolve()
    if not html_path.exists():
        sys.exit(f"No such file: {html_path}")

    with tempfile.TemporaryDirectory() as tmp:
        frames = Path(tmp)
        with sync_playwright() as pw:
            browser = pw.chromium.launch()
            page = browser.new_page(viewport={"width": args.width, "height": args.height})
            page.goto(html_path.as_uri())
            page.wait_for_load_state("networkidle")
            duration = page.evaluate("window.DURATION_MS")
            if not duration:
                sys.exit("HTML must set window.DURATION_MS and window.seek(tMs).")
            total = max(1, round(duration / 1000 * args.fps))
            for i in range(total):
                page.evaluate("t => window.seek(t)", i * 1000 / args.fps)
                page.wait_for_timeout(15)  # let fonts/layout settle after seek
                page.screenshot(path=str(frames / f"f{i:05d}.png"))
                if i % args.fps == 0:
                    print(f"frame {i}/{total}", flush=True)
            browser.close()

        subprocess.run(
            ["ffmpeg", "-y", "-framerate", str(args.fps), "-i", str(frames / "f%05d.png"),
             "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", args.out],
            check=True,
        )
    print(f"Wrote {args.out}")


if __name__ == "__main__":
    main()
