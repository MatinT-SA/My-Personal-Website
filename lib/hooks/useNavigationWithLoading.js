"use client";
import { useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export default function useNavigateWithLoading() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href) => {
    if (isPending) return;
    startTransition(() => router.push(href));
  };

  return { isPending, navigate };
}
