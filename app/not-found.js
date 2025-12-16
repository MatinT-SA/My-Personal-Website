"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingButton from "./components/ui/LoadingButton";

export default function NotFound() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleReboot = () => {
    if (isPending) return;

    startTransition(() => {
      router.push("/");
    });
  };

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

      <LoadingButton
        isLoading={isPending}
        onClick={handleReboot}
        loadingText="[ REBOOTING... ]"
        spinnerSize="h-4 w-4"
        className="
          text-md xs:text-lg md:text-xl
          border-2 border-purple-primary
          px-6 py-3 tracking-wider
          hover:bg-purple-primary hover:text-white
          hover:shadow-[0_0_15px_rgba(35,30,57,0.5)]
        "
      >
        [&gt; REBOOT: RETURN HOME ]
      </LoadingButton>

      <div className="absolute bottom-4 right-4 text-xs text-gray-800">
        [ Debug Code: Route Not Found ]
      </div>
    </div>
  );
}
