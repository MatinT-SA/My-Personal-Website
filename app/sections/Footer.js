import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const CustomFooterStyles = () => (
  <style jsx global>{`
    @keyframes shakeFooter {
      0% {
        transform: translateY(8rem);
      }
      25% {
        transform: translateY(calc(8rem - 7px));
      }
      50% {
        transform: translateY(calc(8rem + 5px));
      }
      75% {
        transform: translateY(calc(8rem - 1px));
      }
      100% {
        transform: translateY(8rem);
      }
    }

    .footer-hidden {
      transform: translateY(8rem); /* Only 2rem visible */
      animation: shakeFooter 2s ease-in-out infinite;
      transition: transform 0.4s ease-in-out;
    }

    .footer-outer:hover .footer-hidden {
      transform: translateY(0); /* Fully reveal */
      animation: none;
    }
  `}</style>
);

export default function Footer({ isDarkMode, onToggle, onReset, siteVersion }) {
  const themeAttr = isDarkMode ? "dark" : "light";

  return (
    <>
      <CustomFooterStyles />
      {/* Step 1: Section footer, not fixed */}
      <div className="footer-outer relative h-40 overflow-hidden">
        <footer
          data-theme={themeAttr}
          className={`footer-hidden relative mx-auto w-[90%] max-w-5xl h-40 rounded-t-xl p-6 grid grid-cols-3 items-center text-center tracking-wide
            ${
              isDarkMode ? "bg-[#1c1c1c] text-white" : "bg-[#001f3f] text-white"
            }`}
        >
          {/* Links */}
          <div className="footer-links flex flex-col items-center gap-2">
            <a
              href="https://github.com/MatinT-SA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ff8000] transition"
            >
              <span>
                <AiFillGithub className="text-xl" />
              </span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matin-taherzadeh-sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ff8000] transition"
            >
              <span>
                <AiFillLinkedin className="text-xl" />
              </span>
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-copyright text-sm border-x-2 border-[#138091] px-2">
            <p>
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.matintaherzadeh.ir/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#ff8000] font-bold transition-colors"
              >
                Matin Taherzadeh
              </a>
              . All Rights Reserved.
            </p>
            <span className="mt-1 inline-block text-xs font-mono opacity-70">
              v{siteVersion}
            </span>
          </div>

          {/* Actions */}
          <div className="footer-actions flex justify-center items-center gap-4">
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
    </>
  );
}
