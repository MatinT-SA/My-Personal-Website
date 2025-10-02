import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SITE_VERSION } from "../config";

const CustomFooterStyles = () => (
  <style jsx global>{`
    /* Shake animation for the wrapper */
    @keyframes shakeFooter {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-7px);
      }
      50% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-1px);
      }
      100% {
        transform: translateY(0);
      }
    }

    /* Wrapper shakes */
    .footer-shake {
      animation: shakeFooter 2s ease-in-out infinite;
    }

    /* Inner footer slides smoothly */
    .footer-inner {
      transform: translateY(6rem); /* initially mostly hidden */
      transition: transform 0.4s ease-in-out;
    }

    /* Slide up on hover */
    .footer-outer:hover .footer-inner {
      transform: translateY(1rem); /* fully visible */
    }

    /* Stop shaking when fully revealed (optional) */
    .footer-outer:hover .footer-shake {
      animation: none;
    }
  `}</style>
);

export default function Footer({ isDarkMode, onToggle, onReset }) {
  const themeAttr = isDarkMode ? "dark" : "light";

  return (
    <>
      <CustomFooterStyles />

      <div className="footer-outer relative h-30 overflow-hidden">
        <div className="footer-shake w-full h-full">
          <footer
            data-theme={themeAttr}
            className={`footer-inner relative mx-auto w-[95%] max-w-6xl h-20 rounded-xl flex items-center tracking-wide
              ${
                isDarkMode
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-[#001f3f] text-white"
              }`}
          >
            <div className="text-sm px-2 grid grid-cols-[3fr_1fr] text-center w-full">
              <p className="flex-1">
                © {new Date().getFullYear()} - تمامی حقوق این سایت به{" "}
                <a
                  href="https://www.matintaherzadeh.ir/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#ff8000] font-bold transition-colors hover:text-yellow-400"
                >
                  matintaherzadeh.ir
                </a>{" "}
                تعلق دارد.
              </p>
              <span className="ml-4 inline-block text-xs font-mono opacity-70">
                v{SITE_VERSION}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
