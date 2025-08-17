import Image from "next/image";

export default function ProfileImage({ onClick, refProp }) {
  return (
    <div className="relative" onClick={onClick}>
      <Image
        ref={refProp}
        src="/images/Matin-Taherzadeh-portrait.webp"
        alt="Matin Taherzadeh"
        width={127}
        height={160}
        className="rounded-[50%] cursor-pointer border-8 border-purple-tertiary shadow-xl object-cover ml-52 select-none
        transition-all duration-500 ease-in-out hover:scale-120"
        priority
      />
    </div>
  );
}
