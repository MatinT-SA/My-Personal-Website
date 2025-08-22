import Image from "next/image";

export default function AboutMeImage() {
  return (
    <div className="relative">
      <Image
        src="/images/matin-4.png"
        alt="computer image"
        width={534}
        height={399}
        quality={80}
        priority
        className="block rounded-lg"
      />
    </div>
  );
}
