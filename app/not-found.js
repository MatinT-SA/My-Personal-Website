import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start bg-transparent text-purple-primary p-4 font-mono">
      <h1
        className="text-9xl md:text-[12rem] font-extrabold glitch-text relative mb-6"
        data-text="404"
      >
        404
      </h1>

      <p className="text-xl md:text-2xl mb-12 text-contrast-secondary glow-text tracking-widest text-center">
        SYSTEM ERROR // DATA STREAM INTERRUPTED
      </p>

      <Link
        href="/"
        className="text-md xs:text-lg md:text-xl border-2 border-purple-primary px-6 py-3 tracking-wider 
                   transition-all duration-300 
                   hover:bg-purple-primary hover:text-white 
                   hover:shadow-[0_0_15px_rgba(35,30,57,0.5)]"
      >
        [&gt; REBOOT: RETURN HOME ]
      </Link>

      <div className="absolute bottom-4 right-4 text-xs text-gray-800">
        [ Debug Code: Route Not Found ]
      </div>
    </div>
  );
}
