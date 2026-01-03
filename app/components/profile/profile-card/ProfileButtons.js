"use client";

import LoadingButton from "@/app/components/ui/LoadingButton";
import { Link } from "@/i18n/routing";
import useNavigateWithLoading from "@/lib/hooks/useNavigationWithLoading";
import Button from "@app/components/ui/Button";
import { useTranslations } from "next-intl";

export default function ProfileButtons() {
  const t = useTranslations("profile");
  const { isPending, navigate } = useNavigateWithLoading();

  return (
    <div className="text-sm flex gap-3 mt-6 xs:text-base">
      <Link href="#comment" scroll={true}>
        <Button className="bg-blue-light text-purple-primary border border-purple-primary rounded-sm hover:bg-purple-primary hover:text-blue-light hover:border-blue-light">
          {t("button_message")}
        </Button>
      </Link>

      <LoadingButton
        isLoading={isPending}
        onClick={() => navigate("/experience")}
        loadingText={t("button_experience_loading")}
        spinnerSize="h-4 w-4"
        className="bg-purple-primary text-blue-light border border-blue-light px-5 py-2 rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary mx-auto"
      >
        {t("button_experience")}
      </LoadingButton>
    </div>
  );
}
