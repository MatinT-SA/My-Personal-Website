import Image from "next/image";

export default function ProfileImage({
  onClick,
  refProp,
  isMobile,
  setIsMobile,
}) {
  return (
    <div className="relative" onClick={onClick}>
      <Image
        ref={refProp}
        src="/images/Matin-Taherzadeh-portrait.webp"
        alt="Matin Taherzadeh"
        width={127}
        height={160}
        className={`rounded-[50%] cursor-pointer border-8 border-purple-tertiary shadow-xl object-cover select-none
        transition-all duration-500 ease-in-out ${
          isMobile ? "-mt-5" : "ml-52 hover:scale-120"
        }`}
        priority
      />
    </div>
  );
}
