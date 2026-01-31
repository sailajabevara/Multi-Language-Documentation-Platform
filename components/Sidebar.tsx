
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const lang = segments[0] ?? "en";
  const version = segments[2] ?? "v1";

  return (
    <aside
      data-testid="sidebar"
      className="w-64 border-r p-4 hidden md:block"
    >
      <nav className="space-y-2">
        <Link
          href={`/${lang}/docs/${version}/introduction`}
          data-testid="sidebar-nav-link-introduction"
          className="block hover:underline"
        >
          Introduction
        </Link>
      </nav>
    </aside>
  );
}
