"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SUPPORTED_LANGS } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // /en/docs/v1/introduction
  const parts = pathname.split("/").filter(Boolean);

  return (
    <div data-testid="language-switcher">
      {SUPPORTED_LANGS.map((lang) => {
        const newPath = `/${lang}/${parts.slice(1).join("/")}`;
        return (
          <Link key={lang} href={newPath} className="ml-2">
            {lang.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
