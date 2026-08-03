import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          <div>
            <div className={styles.logo}>
              <img src="/logo.png" alt="روح الرشاقه" style={{ maxHeight: '80px', width: 'auto' }} />
            </div>
            <p className={styles.desc}>
              «روح الرشاقه» هو المركز الفريد كلياً في السعودية برؤيته في دعم رواده لإتباع أنماط الحياة الصحية من خلال أفضل خبراء التغذية وأنظمة غذائية ذكية ومنتجات متنوعة تمكن من الوصول إلى الوزن المثالي.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={`${styles.socialBtn} ${styles.tw}`} aria-label="تويتر"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className={`${styles.socialBtn} ${styles.ig}`} aria-label="انستغرام"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className={`${styles.socialBtn} ${styles.sc}`} aria-label="سناب شات"><i className="fa-brands fa-snapchat"></i></a>
              <a href="https://wa.me/966591640335" className={`${styles.socialBtn} ${styles.wa}`} aria-label="واتساب"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" className={`${styles.socialBtn} ${styles.yt}`} aria-label="يوتيوب"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className={`${styles.socialBtn} ${styles.tk}`} aria-label="تيك توك"><i className="fa-brands fa-tiktok"></i></a>
            </div>
            <div className={styles.taxRow}>
              <img src="https://cdn.salla.network/images/tax.png?v=2.0.5" alt="ضريبة" className={styles.taxLogo} />
              <span>الرقم الضريبي: <strong>311101960600003</strong></span>
            </div>
          </div>

          <div className={styles.col}>
            <h3>تواصل معنا</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+966591640335">+966591640335</a>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@rouh-alrashaka.shop">info@rouh-alrashaka.shop</a>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-brands fa-whatsapp"></i>
                <a href="https://wa.me/966591640335">واتساب</a>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-location-dot"></i>
                <span>الأحساء، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          <div className={styles.col}>
            <h3>روابط مهمة</h3>
            <div className={styles.links}>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> المدونة</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> من نحن</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> سياسة الخصوصية</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> الاستبدال والاسترجاع</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> استفسارات نظام تابي</Link>
            </div>
          </div>

          <div className={styles.col}>
            <h3>حسابي</h3>
            <div className={styles.links}>
              <Link href="/login"><i className="fa-solid fa-chevron-left"></i> تسجيل الدخول</Link>
              <Link href="/register"><i className="fa-solid fa-chevron-left"></i> إنشاء حساب</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> طلباتي</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> المفضلة</Link>
              <Link href="#"><i className="fa-solid fa-chevron-left"></i> نقاط المكافآت</Link>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>جميع الحقوق محفوظة &copy; 2026 – <Link href="/">روح الرشاقه</Link></p>
          {/* <div className={styles.payments}>
            <span className={styles.paymentIcon}><i className="fa-brands fa-cc-visa"></i> Visa</span>
            <span className={styles.paymentIcon}><i className="fa-brands fa-cc-mastercard"></i> Mastercard</span>
            <span className={styles.paymentIcon}><i className="fa-brands fa-apple-pay"></i> Apple Pay</span>
            <span className={styles.paymentIcon}><i className="fa-solid fa-building-columns"></i> مدى</span>
            <span className={styles.paymentIcon}>تابي</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
