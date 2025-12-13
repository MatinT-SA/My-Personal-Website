"use client";

import { Link } from "@/i18n/routing";
import Button from "../../../ui/Button";
import { useTranslations } from "next-intl";

export default function ProfileButtons() {
  const t = useTranslations("profile");

  return (
    <div className="text-sm flex gap-3 mt-6 xs:text-base">
      <Link href="#comment" scroll={true}>
        <Button className="bg-blue-light text-purple-primary border border-purple-primary rounded-sm hover:bg-purple-primary hover:text-blue-light hover:border-blue-light">
          {t("button_message")}
        </Button>
      </Link>

      <Link href="/experience">
        <Button className="bg-purple-primary text-blue-light border border-blue-light rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary">
          {t("button_experience")}
        </Button>
      </Link>
    </div>
  );
}
