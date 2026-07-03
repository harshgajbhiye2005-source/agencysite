import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="text-2xl font-bold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-muted">
                Menu
              </span>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-muted">
                Social
              </span>
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a href="#top" className="transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
