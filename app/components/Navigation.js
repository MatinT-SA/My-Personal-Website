export default function Navigation() {
  return (
    <nav className="p-6 h-17.5 bg-gradient-yellow">
      <div className="openMenu">
        <i className="fa fa-bars" />
      </div>

      <ul className="mainMenu flex flex-wrap justify-center gap-4">
        <li>
          <a href="#home" className="nav-item" aria-current="page">
            خانه
          </a>
        </li>
        <li>
          <a href="#about-me" className="nav-item">
            درباره من
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-item">
            مهارت ها
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-item">
            نمونه کارها
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item">
            راه های ارتباطی
          </a>
        </li>
        <li>
          <a href="#comment" className="nav-item">
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
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/MatinT_SA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/MatinT-SA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/matin-taherzadeh-sa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
