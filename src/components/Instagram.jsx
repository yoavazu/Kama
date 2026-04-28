import { useEffect } from 'react';

export default function Instagram() {
  useEffect(() => {
    // Load Instagram native embed script
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <section id="instagram" style={{ padding: '80px 0', background: 'rgba(255, 244, 219, 0.4)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '10px' }}>לעדכונים</h2>
          <a
            href="https://www.instagram.com/kamabakery_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 700, color: 'var(--teal-dark)', fontSize: '1.2rem', textDecoration: 'underline' }}
          >
          </a>
        </div>

        {/* Official Native Instagram Embed */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/kamabakery_/"
            data-instgrm-version="14"
            style={{
              background: 'var(--cream-light)',
              border: '0',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 8px 24px rgba(47, 115, 117, 0.1)',
              margin: '0',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          >
          </blockquote>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <a className="button primary" href="https://www.instagram.com/kamabakery_/" target="_blank" rel="noopener noreferrer">
            לעמוד האינסטגרם
          </a>
          <a className="button secondary" href="https://www.facebook.com/profile.php?id=61576889503669" target="_blank" rel="noopener noreferrer" style={{ background: '#fff4db' }}>
            לעמוד הפייסבוק
          </a>
        </div>
      </div>
    </section>
  );
}
