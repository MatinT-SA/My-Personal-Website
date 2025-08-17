import Link from "next/link";
import Button from "../../../Button";

export default function ProfileButtons() {
  return (
    <div className="flex gap-3 mt-6">
      <Link href="#comment" scroll={true}>
        <Button className="bg-blue-light text-purple-primary border border-purple-primary rounded-sm hover:bg-purple-primary hover:text-blue-light hover:border-blue-light">
          ارسال پیام
        </Button>
      </Link>

      <Button
        className="bg-purple-primary text-blue-light border border-blue-light rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary"
        onClick={() =>
          window.open(
            "https://www.instagram.com/matin_taherzadeh_sa/",
            "_blank"
          )
        }
      >
        در اینستا فالوم کن
      </Button>
    </div>
  );
}
