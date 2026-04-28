import { useState, useEffect } from 'react';

const images = [
  "/Pics/header.jpg",
  "/Pics/546698486_17859156249497458_3541776964028580744_n.jpg",
  "/Pics/38_2025_11_27__12_52_55.jpg",
  "/Pics/49_2025_11_05__16_43_36.jpg",
  "/Pics/4_2026_04_26__08_51_40.jpg",
  "/Pics/547880828_17859156300497458_3493450880286575366_n.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Slideshow Backgrounds */}
      {images.map((src, index) => {
        let translateX = "100%"; // Default is waiting on the right
        let transition = "transform 1.2s ease-in-out";

        if (index === currentImageIndex) {
          translateX = "0%";
        } else if (index === (currentImageIndex - 1 + images.length) % images.length) {
          translateX = "-100%"; // Previous image slides to the left
        } else {
          translateX = "100%";
          transition = "none"; // Instantly snap back to the right without animating
        }

        return (
          <div key={src} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: transition,
            transform: `translateX(${translateX})`,
            zIndex: 1
          }} />
        );
      })}

      {/* Overlay to preserve text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(241, 223, 186, 0.55), rgba(241, 223, 186, 0.75))',
        zIndex: 2
      }} />

      <div className="container hero-content" style={{ position: 'relative', zIndex: 3 }}>
        <img src="/kama_logo_hebrew.png" alt="לוגו קמא" className="hero-logo" />
        <p className="subtitle" style={{ fontWeight: 700, color: '#1a4142' }}>
          בוקר טוב, מאפים טריים, קפה, כריכים, מתוקים ויין — באווירה חמימה ונעימה בגן יבנה.
        </p>
        <div className="actions">
          <a className="button primary" href="#menu">לצפייה בתפריט המלא</a>
          <a className="button secondary" style={{ background: '#fff4db' }}
            href="https://waze.com/ul?q=%D7%A2%D7%95%D7%A4%D7%A8%D7%94%2016%20%D7%92%D7%9F%20%D7%99%D7%91%D7%A0%D7%94&navigate=yes"
            target="_blank" rel="noopener noreferrer">ניווט ב־Waze</a>
        </div>
      </div>
    </section>
  );
}
