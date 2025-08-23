import Image from "next/image";

export default function AboutMeImage() {
  return (
    <div className="w-full max-w-[500px] mx-auto float-matin">
      <Image
        src="/images/matin-taherzadeh-standing-4.png"
        alt="Matin Taherzadeh Image"
        width={500}
        height={700}
        priority
        quality={100}
        className="rounded-lg object-contain w-full h-auto"
      />
    </div>
  );
}
