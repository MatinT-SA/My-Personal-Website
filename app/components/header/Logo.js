import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/#home"
      className="block w-full max-w-48 mx-auto"
      id="logo-header"
    >
      <Image
        src="/images/logo.webp"
        alt="Logo"
        width={192}
        height={0}
        className="w-full h-auto object-contain"
        priority
        fetchPriority="high"
      />
    </Link>
  );
}
