import { useTranslations } from "next-intl";

export default function ProfileInfo() {
  const t = useTranslations("profile");

  return (
    <>
      <div className="text-2xl font-bold text-white -mt-10 -ml-28">
        {t("info_name")}
      </div>
      <div className="text-white mt-10 text-base">{t("info_role")}</div>
    </>
  );
}
