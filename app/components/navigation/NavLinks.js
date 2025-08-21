export default function NavLinks({ links, activeSection, onClick, variant }) {
  return (
    <>
      {links.map(({ id, label }) => {
        const isActive = activeSection === id;

        // Apply mx-auto for both mobile and desktop to match legacy layout
        const liClass = "mx-auto";

        // a class differs slightly for mobile (items-center)
        const baseA =
          "nav-item inline-block py-5 px-8 text-xl transition-opacity duration-200";
        const aClass = variant === "mobile" ? `items-center ${baseA}` : baseA;

        // color differs between mobile and desktop
        const linkStyle =
          variant === "mobile"
            ? { color: "#fff", fontWeight: 700 }
            : { color: "var(--color-dark-primary)", fontWeight: 700 };

        return (
          <li key={id} className={liClass}>
            <a
              href={`#${id}`}
              onClick={() => onClick(id)}
              aria-current={isActive ? "page" : undefined}
              className={`${aClass} ${
                isActive ? "opacity-100 active-link" : "opacity-50"
              } hover:opacity-100`}
              style={linkStyle}
            >
              {label}
            </a>
          </li>
        );
      })}
    </>
  );
}
