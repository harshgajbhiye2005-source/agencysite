#!/usr/bin/env bash
# Install all skills in this folder into ~/.claude/skills/ (personal, all projects).
set -euo pipefail

src="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
dest="$HOME/.claude/skills"
mkdir -p "$dest"

for dir in "$src"/*/; do
  name="$(basename "$dir")"
  mkdir -p "$dest/$name"
  cp -R "$dir"/. "$dest/$name/"
  echo "installed /$name"
done

echo "Done. Type / in Claude Code to see them."
