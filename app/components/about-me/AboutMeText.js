import { FiDownload } from "react-icons/fi";
import TypedHeading from "./TypedHeading";

export default function AboutMeText() {
  return (
    <div className="p-4 sm:px-12 py-4">
      <TypedHeading />

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-12">
        فارغ‌التحصیل کارشناسی مهندسی کامپیوتر (نرم‌افزار) از دانشگاه آزاد کرج.
        <br />
        سابقه تدریس زبان انگلیسی به مدت یک سال در موسسه زبان.
        <br />
        تسلط بر زبان برنامه‌نویسی جاوااسکریپت و کتابخانه React و تجربه کار با C#
        و وردپرس، آشنایی با Next.js.
        <br />
        یادگیری TypeScript از اهداف اصلی در آینده نزدیک است.
        <br />
        علاقه‌مند به یادگیری، مسئولیت‌پذیر، منظم و سخت‌کوش.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/Content/resume/Matin Taherzadeh Resume - 1404-05-07.pdf"
          download
          className="group relative px-8 py-4 text-lg font-bold text-blue-light bg-purple-primary rounded-full transition-all duration-300 ease-in-out hover:text-purple-700 hover:bg-blue-300 hover:shadow-lg flex items-center"
        >
          دانلود رزومه
          <FiDownload className="mr-2 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
