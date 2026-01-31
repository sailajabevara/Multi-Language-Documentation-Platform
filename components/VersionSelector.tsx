
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const VERSIONS = ["v1", "v2", "v3"];

export default function VersionSelector() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const lang = segments[0] ?? "en";
  const version = segments[2] ?? "v1";
  const slug = segments[3] ?? "introduction";

  return (
    <div data-testid="version-selector" className="flex gap-2">
      {VERSIONS.map((v) => (
        <Link
          key={v}
          href={`/${lang}/docs/${v}/${slug}`}
          data-testid={`version-option-${v}`}
        >
          {v.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
