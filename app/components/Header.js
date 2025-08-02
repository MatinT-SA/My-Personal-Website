import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header flex justify-between items-center flex-wrap w-full py-4">
      <div className="header-p w-full sm:w-1/3 text-center sm:text-left">
        <p>Matin</p>
        <p>Taherzadeh</p>
      </div>
      <div id="logo-header" className="w-full sm:w-1/3 text-center">
        <Logo />
      </div>
      <div className="header-p w-full sm:w-1/3 text-center sm:text-right">
        <p>متین</p>
        <p>طاهرزاده</p>
      </div>
    </header>
  );
}
