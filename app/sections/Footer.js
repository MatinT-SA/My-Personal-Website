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
      transform: translateY(8rem); /* initially mostly hidden */
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

      {/* Footer section */}
      <div className="footer-outer relative h-40 overflow-hidden">
        {/* Shaking wrapper */}
        <div className="footer-shake w-full h-full">
          <footer
            data-theme={themeAttr}
            className={`footer-inner relative mx-auto w-[95%] max-w-6xl h-32 rounded-xl grid grid-cols-[2fr_1fr] items-center text-center tracking-wide
              ${
                isDarkMode
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-[#001f3f] text-white"
              }`}
          >
            {/* Links */}
            {/* <div className="flex flex-col items-center gap-2">
              <a
                href="https://github.com/MatinT-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#ff8000] transition"
              >
                <AiFillGithub className="text-xl" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matin-taherzadeh-sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#ff8000] transition"
              >
                <AiFillLinkedin className="text-xl" /> LinkedIn
              </a>
            </div> */}

            {/* Copyright */}
            <div className="text-sm border-[#138091] px-2">
              <p>
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
              <span className="mt-1 inline-block text-xs font-mono opacity-70">
                v{SITE_VERSION}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-center items-center gap-4">
              <button
                className="reset-button text-white font-bold transition-all duration-300 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg"
                data-theme={themeAttr}
                onClick={onReset}
              >
                Reset Goals
              </button>

              <button
                onClick={onToggle}
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {isDarkMode ? "🌙 Dark" : "🌞 Light"}
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
