import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" reload>
      <Image
        src="/images/matin taherzade logo-02.webp"
        alt="Logo"
        width={200}
        height={100}
        priority
        className="mx-auto h-auto w-full max-w-[120px] sm:max-w-[150px]"
      />
    </Link>
  );
}
