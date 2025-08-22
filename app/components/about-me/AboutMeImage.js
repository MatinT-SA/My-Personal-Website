import Image from "next/image";

export default function AboutMeImage() {
  return (
    <div className="relative">
      <Image
        src="/Content/images/bg2-com2.webp"
        alt="computer image"
        width={534}
        height={399}
        quality={80}
        priority
        className="block rounded-lg shadow-lg"
      />
    </div>
  );
}
