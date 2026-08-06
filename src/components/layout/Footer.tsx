'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrap}>
          <img src="/logo.jpeg" alt="نحو الرشاقة" />
        </div>

        {/* Text */}
        <p className={styles.desc}>
          "نحو الرشاقة" هو المركز الفريد كلياً في السعودية برؤيته في دعم رواده لإتباع أنماط الحياة الصحية من خلال أفضل خبراء التغذية و أنظمة غذائية ذكية ومنتجات منوعة تمكن من الوصول إلي الوزن المثالي
        </p>

        {/* Social */}
        <div className={styles.socialList}>
          <a href="#" className={styles.socialItem} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className={styles.socialItem} aria-label="Snapchat"><i className="fa-brands fa-snapchat"></i></a>
          <a href="#" className={styles.socialItem} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>

        {/* Commercial Registry */}
        <div className={styles.registryBlock}>
          <div className={styles.registryText}>
            <div>السجل التجاري</div>
            <div style={{ fontWeight: 800 }}>1010792487</div>
          </div>
          <div className={styles.registryImgWrap}>
            <img src="https://cdn.salla.network/images/sbc.png?v=1" alt="سجل تجاري" className={styles.registryImg} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<i class="fa-solid fa-scale-balanced" style="font-size: 32px; color: #fff;"></i>'; }} />
          </div>
        </div>

        {/* Contact Title */}
        <h3 className={styles.title}>تواصل معنا</h3>

        {/* Contact Icons */}
        <div className={styles.contactIcons}>
          <a href="#" className={styles.socialItem} aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
          <a href="#" className={styles.socialItem} aria-label="Phone"><i className="fa-solid fa-phone"></i></a>
          <a href="#" className={styles.socialItem} aria-label="Mobile"><i className="fa-solid fa-mobile-screen"></i></a>
          <a href="#" className={styles.socialItem} aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
        </div>

        {/* Links Title */}
        <h3 className={styles.title}>روابط مهمة</h3>

        {/* Links Grid */}
        <div className={styles.linksGrid}>
          <div className={styles.linksCol}>
            <Link href="#">المدونة</Link>
            <Link href="#">سياسة الخصوصية</Link>
            <Link href="#">الاستبدال والاسترجاع</Link>
          </div>
          <div className={styles.linksCol}>
            <Link href="#">من نحن</Link>
            <Link href="#">استفسارت لمستخدم نظام التقسيط تابي</Link>
          </div>
        </div>

        {/* VAT Block */}
        <div className={styles.vatBlock}>
          <div className={styles.vatText}>
            <div>الرقم الضريبي</div>
            <div style={{ fontWeight: 800 }}>311101960600003</div>
          </div>
          <img src="https://cdn.salla.network/images/tax.png?v=2.0.5" alt="الرقم الضريبي" className={styles.vatImg} />
        </div>
      </div>


    </footer>
  );
}
