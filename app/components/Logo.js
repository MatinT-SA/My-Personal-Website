import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block w-full max-w-[192px] mx-auto">
      <Image
        src="/images/matin taherzade logo-02.webp"
        alt="Logo"
        width={192}
        height={0}
        className="w-full h-auto object-contain"
        priority
      />
    </Link>
  );
}
