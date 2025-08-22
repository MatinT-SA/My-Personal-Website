import React from "react";
import TypedHeading from "./TypedHeading";

export default function AboutMeText() {
  return (
    <div className="p-4 sm:p-8">
      <TypedHeading />

      <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-2 text-center">
        توسعه دهنده وب
      </p>

      <p className="text-base sm:text-lg text-gray-700 leading-8">
        درود بر شما. محمد متین طاهرزاده شاه آبادی هستم. فارغ التحصیل کارشناسی
        مهندسی کامپیوتر (نرم افزار) از دانشگاه آزاد کرج.
        <br />
        در حوزه وب و توسعه فرانت‌اند سایت فعالیت دارم.
        <br />
        سابقه تدریس زبان انگلیسی به مدت یک سال در موسسه زبان.
        <br />
        تسلط و تمرکز بر روی زبان برنامه نویسی جاوااسکریپت و کتابخانه ری‌اکت و
        تجربه کار با سی شارپ و وردپرس.
        <br />
        یادگیری تایپ اسکریپت و نکست جی اس، از اهداف اصلی ام در آینده نزدیک است.
        <br />
        علاقه مند به یادگیری، مسئولیت پذیر، منظم و سخت کوش.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/Content/resume/Matin Taherzadeh Resume - 1404-05-07.pdf"
          className="relative px-8 py-4 text-lg font-bold text-blue-300 bg-purple-700 rounded-full transition-all duration-400 ease-in-out hover:text-purple-700 hover:bg-blue-300 hover:shadow-lg"
          download
        >
          <i className="fas fa-download ml-2 transition-transform duration-400 ease-in-out group-hover:translate-x-1"></i>
          دانلود رزومه
        </a>
      </div>
    </div>
  );
}
