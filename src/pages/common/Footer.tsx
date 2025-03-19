import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Pokemon
            </Link>
            . Designed by{" "}
            <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              DonyCanra
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
