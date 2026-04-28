export default function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">התפריט שלנו</h2>
        
        <div className="menu-wrapper">
          
          {/* Category 1 */}
          <div className="menu-category">
            <h3>הבוקר של קמא</h3>
            <p className="menu-note">כל ארוחות הבוקר מגיעות עם שתיה חמה / קרה. מיץ סחוט בתוספת 5 ₪</p>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בוקר טוב</span>
                  <span className="menu-price">60 ₪</span>
                </div>
                <p className="menu-item-desc">שקשוקה קלאסית מהטאבון, טחינה, זיתים סורים, אריסה, סלט שוק ולחם הבית.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בוקר קמא</span>
                  <span className="menu-price">68 ₪</span>
                </div>
                <p className="menu-item-desc">שקשוקה בחצ׳פורי, טחינה, זיתים סורים, אריסה, סלט שוק.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">פוקאצ׳ינה</span>
                  <span className="menu-price">68 ₪</span>
                </div>
                <p className="menu-item-desc">מאפה יווני, טפנד זיתי קלמטה, זוקיני ולאבנה, סלט יווני, ביצי עין, זיתי קלמטה ועגבניות.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בוקר שוק</span>
                  <span className="menu-price">60 ₪</span>
                </div>
                <p className="menu-item-desc">צלחת לבנה / טחינה / לאבנה, סלט ירקות קצוץ, לחם הבית, ו-3 מטבלים לבחירה.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בראנץ׳</span>
                  <span className="menu-price">62 ₪</span>
                </div>
                <p className="menu-item-desc">מיני פרנה טריה, חציל, ביצה קשה, טחינה, אריסה. מיני טריו ברוסקטה. מוגש עם חמוצים.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קיש</span>
                  <span className="menu-price">54 ₪</span>
                </div>
                <p className="menu-item-desc">קיש תרד / בטטה / פטריות / גבינות, מוגש עם סלט עלים וויניגרט.</p>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="menu-category">
            <h3>בוקר בקטנה ומתוקים</h3>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">פנקן בוקר</span>
                  <span className="menu-price">25 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קפה ומאפה אישי / 3 קטנים</span>
                  <span className="menu-price">25 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בריוש פירות ורוטבולה</span>
                  <span className="menu-price">25 ₪</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="menu-category">
            <h3>להתענג...</h3>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">הקלאסי שלנו</span>
                  <span className="menu-price">54 ₪</span>
                </div>
                <p className="menu-item-desc">טוסט עגבניות, מוצרלה ובזיליקום.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">הלבנה</span>
                  <span className="menu-price">62 ₪</span>
                </div>
                <p className="menu-item-desc">מוצרלה, ריקוטה ופיקורינו.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מלכת העגבניות</span>
                  <span className="menu-price">62 ₪</span>
                </div>
                <p className="menu-item-desc">טוסט עגבניות, מוצרלה, עגבניות שרי, בזיליקום, מסקרפונה, רוקט ובצל ירוק.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">טונה אהובה</span>
                  <span className="menu-price">62 ₪</span>
                </div>
                <p className="menu-item-desc">טוסט עגבניות, מוצרלה, תערובת טונה, בצל, פלפלים כבושים, זיתים ופפריקה.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">ירוק מהבית</span>
                  <span className="menu-price">62 ₪</span>
                </div>
                <p className="menu-item-desc">טוסט עגבניות, מוצרלה ותערובת פטריות.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">פיצה בוראטה</span>
                  <span className="menu-price">78 ₪</span>
                </div>
                <p className="menu-item-desc">טוסט עגבניות, גבינות קמא, בוראטה, בזיליקום, שמן זית ובלסמי.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קלצונה</span>
                  <span className="menu-price">28 ₪</span>
                </div>
                <p className="menu-item-desc">מבחר גבינות אישי או 3 תוספות.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">פוקאצ׳ה קלאסית</span>
                  <span className="menu-price">22 ₪</span>
                </div>
                <p className="menu-item-desc">שמן זית, סילאן וסקורדליה.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">פוקאצ׳ה חציל</span>
                  <span className="menu-price">42 ₪</span>
                </div>
                <p className="menu-item-desc">קרם חצילים שרופים, טחינה, סלט עגבניות, שמנת חמוצה וזעתר קמאי.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">רביולי</span>
                  <span className="menu-price">59 ₪</span>
                </div>
                <p className="menu-item-desc">רביולי ברוטב עגבניות שמנת מהטאבון.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מנה הבית</span>
                  <span className="menu-price">59 ₪</span>
                </div>
                <p className="menu-item-desc">פסטה זיטי עגבניות וגבינות מוקרמת בטאבון.</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">תוספות לפיצה / מחבת</span>
                  <span className="menu-price">5 / 8 ₪</span>
                </div>
                <p className="menu-item-desc">זיתים/בצל/פלפל (5 ₪), ברוקולי/טונה/חצילים/פטריות/ביצה (8 ₪).</p>
              </div>
            </div>
          </div>

          {/* Category 4 */}
          <div className="menu-category">
            <h3>משקאות וקפה</h3>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">אספרסו קצר / כפול</span>
                  <span className="menu-price">10 / 12 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מקיאטו / כפול</span>
                  <span className="menu-price">10 / 12 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קפוצ׳ינו / נס קפה</span>
                  <span className="menu-price">13 / 15 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">אמריקנו / קורטאדו</span>
                  <span className="menu-price">13 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קפה שחור / תה עם נענע</span>
                  <span className="menu-price">10 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">שוקו חם</span>
                  <span className="menu-price">18 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">אפוגטו</span>
                  <span className="menu-price">17 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">קפה קר קטן / גדול</span>
                  <span className="menu-price">15 / 17 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">אייס קפה</span>
                  <span className="menu-price">18 / 20 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מיץ סחוט טרי בטעמים</span>
                  <span className="menu-price">16 ₪</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 5 */}
          <div className="menu-category">
            <h3>משקאות קלים ובירות</h3>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מים / סודה</span>
                  <span className="menu-price">10 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">מים בטעמים / פררלה</span>
                  <span className="menu-price">12 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">לימונדה / לימונענע</span>
                  <span className="menu-price">12 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">ספרייט / פיוזטי / ענבים</span>
                  <span className="menu-price">12 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בירה שחורה</span>
                  <span className="menu-price">14 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">בירה קורונה / שפירא</span>
                  <span className="menu-price">18 / 26 ₪</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 6 */}
          <div className="menu-category" style={{ marginBottom: 0 }}>
            <h3>תפריט יינות</h3>
            <p className="menu-note">יינות בוטיק יקב ענבי / יקב פלדשטיין</p>
            <div className="menu-items-grid">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">יין אדום / לבן ״ליבם״</span>
                  <span className="menu-price">135 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">יין אדום / רוזה / לבן ״פלדשטיין״</span>
                  <span className="menu-price">135 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">אלה ארטיסנו</span>
                  <span className="menu-price">120 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">יין לבן ״ענבי לבן״ / אדום ״קסם״</span>
                  <span className="menu-price">95 ₪</span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">יין בוטיק ״שמירה מיוחדת״</span>
                  <span className="menu-price">179 ₪</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
