import Image from "next/image";

export default function AboutMeImage() {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[570px]">
      <Image
        src="/images/matin-taherzadeh-standing.png"
        alt="Matin Taherzadeh Image"
        fill
        priority
        quality={100}
        className="rounded-lg object-cover"
      />
    </div>
  );
}
