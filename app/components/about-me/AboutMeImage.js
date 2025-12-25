import Image from "next/image";

const IMAGE_WRAPPER_CLASSES =
  "w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[250px] mx-16 float-matin";
const IMAGE_CLASSES = "rounded-lg object-contain w-full h-auto";

export default function AboutMeImage() {
  return (
    <div className={IMAGE_WRAPPER_CLASSES}>
      <Image
        src="/images/matin-taherzadeh-standing-4.webp"
        alt="Matin Taherzadeh Image"
        width={500}
        height={700}
        priority
        quality={100}
        className={IMAGE_CLASSES}
      />
    </div>
  );
}
