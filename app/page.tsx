
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Docs Portal
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl">
        This is the official documentation portal.
        Choose a version below to start reading the documentation.
      </p>

      <div className="flex gap-4">
        <Link href="/en/docs/v1/introduction" className="border px-4 py-2 rounded">
          Version 1
        </Link>
        <Link href="/en/docs/v2/introduction" className="border px-4 py-2 rounded">
          Version 2
        </Link>
        <Link href="/en/docs/v3/introduction" className="border px-4 py-2 rounded">
          Version 3
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-6">
      
      </p>
    </main>
  );
}
