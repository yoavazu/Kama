export default function Header() {
  return (
    <header>
      <nav className="container nav" aria-label="ניווט ראשי">
        <a className="brand" href="#top" aria-label="קמא דף הבית">
          <img src="kama_logo.png" alt="לוגו קמא" />
          <span></span>
        </a>
        <div className="nav-links">
          <a href="#about">עלינו</a>
          <a href="#menu">תפריט</a>
          <a href="#contact" className="nav-cta">הגעה למאפייה</a>
        </div>
      </nav>
    </header>
  );
}
