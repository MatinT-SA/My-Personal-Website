import Link from "next/link";
import Button from "@/app/components/Button";
import { SITE_VERSION } from "@/app/config";

export default function Footer() {
  return (
    <div className="footer-outer relative h-30 overflow-hidden">
      <div className="footer-shake w-full h-full">
        <footer
          className={`footer-inner relative bg-purple-primary text-white mx-auto w-[95%] max-w-5xl h-20 rounded-xl flex items-center tracking-wide`}
        >
          <div className="text-md px-2 grid grid-cols-[1fr_2fr_1fr] text-center w-full items-center justify-center">
            <Link href="/experience">
              <Button className="bg-purple-primary text-blue-light border border-blue-light rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary mx-auto">
                سابقه کاری
              </Button>
            </Link>
            <p>
              © {new Date().getFullYear()} - تمامی حقوق این سایت به{" "}
              <a
                href="https://www.matintaherzadeh.ir"
                target="_blank"
                rel="noreferrer noopener"
                className="text-amber-100 font-bold transition-colors hover:text-yellow-primary tracking-wider"
              >
                matintaherzadeh.ir
              </a>{" "}
              تعلق دارد.
            </p>
            <span className="text-sm font-mono opacity-70">
              v{SITE_VERSION}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
