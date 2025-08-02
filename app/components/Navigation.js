export default function Navigation() {
  return (
    <nav id="header-nav" className="mt-4">
      <div className="openMenu">
        <i className="fa fa-bars" />
      </div>
      <ul className="mainMenu flex flex-wrap justify-center gap-4">
        <li className="Home active">
          <a href="#Home" className="nav-item">
            خانه
          </a>
        </li>
        <li className="AboutMe">
          <a href="#AboutMe-anchor" className="nav-item">
            درباره من
          </a>
        </li>
        <li className="Skills">
          <a href="#Skills-anchor" className="nav-item">
            مهارت ها
          </a>
        </li>
        <li className="Resume">
          <a href="#Resume-anchor" className="nav-item">
            نمونه کارها
          </a>
        </li>
        <li className="Contact">
          <a href="#Contact-anchor" className="nav-item">
            راه های ارتباطی
          </a>
        </li>
        <li className="Comment">
          <a href="#Comment-anchor" className="nav-item">
            ارسال پیام
          </a>
        </li>
        <div className="closeMenu">
          <i className="fa fa-times" />
        </div>
        <li className="icons flex gap-4">
          <a
            href="https://www.instagram.com/matin_taherzadeh_sa/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/MatinT_SA"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/MatinT-SA"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/matin-taherzadeh-sa"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
