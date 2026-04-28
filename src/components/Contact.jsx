export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">בואו להגיד שלום</h2>
        <div className="contact-grid">
          <article className="contact-card">
            <div>
              <h3>קמא — גן יבנה</h3>
              <ul className="contact-list">
                <li>📍 עופרה 16, גן יבנה / קמא בייקרי בWaze </li>
                <li>📞 <a href="tel:+972542945155">טלפון: 054-294-5155</a></li>
                <li>📷 אינסטגרם: <a href="https://www.instagram.com/kamabakery_/" target="_blank" rel="noopener noreferrer">@kamabakery_</a></li>
                <li>📱 פייסבוק: <a href="https://www.facebook.com/profile.php?id=61576889503669" target="_blank" rel="noopener noreferrer">קמא - קפה, מאפה, אהבה</a></li>
              </ul>
            </div>
            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <a className="button primary"
                href="https://waze.com/ul?ll=31.7957802,34.699888&navigate=yes"
                target="_blank" rel="noopener noreferrer">ניווט ב־Waze</a>
              <a className="button secondary" href="https://www.instagram.com/kamabakery_/" target="_blank"
                rel="noopener noreferrer">אינסטגרם</a>
              <a className="button primary" href="https://www.facebook.com/profile.php?id=61576889503669" target="_blank"
                rel="noopener noreferrer">פייסבוק</a>
            </div>
          </article>

          <div className="map-card" aria-label="מפה לעופרה 16 גן יבנה">
            <iframe title="מפה - קמא עופרה 16 גן יבנה" loading="lazy" allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=%D7%A2%D7%95%D7%A4%D7%A8%D7%94%2016%20%D7%92%D7%9F%20%D7%99%D7%91%D7%A0%D7%94&output=embed">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
