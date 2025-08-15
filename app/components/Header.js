import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header text-5xl flex justify-between items-center flex-wrap w-full py-4 bg-purple-primary text-blue-light h-52">
      <div className="hidden md:block md:w-1/3 text-center leading-normal header-p">
        <p>متین</p>
        <p>طاهرزاده</p>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Logo />
      </div>
      <div className="hidden md:block md:w-1/3 text-center leading-normal header-p">
        <p>Matin</p>
        <p>Taherzadeh</p>
      </div>
    </header>
  );
}
