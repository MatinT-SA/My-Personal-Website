import Image from "next/image";

export default function Logo() {
  return (
    <a href="/">
      <Image
        src="/images/matin taherzade logo-02.webp"
        alt="Logo"
        width={120}
        height={60}
        className="mx-auto"
      />
    </a>
  );
}
