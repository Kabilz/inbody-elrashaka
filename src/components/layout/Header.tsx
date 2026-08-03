'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.announcementBar}>
        <div className={styles.marqueeTrack}>
          <span>🚚 شحن مجاني على الطلبات أكثر من ١٩٩ ريال</span>
          <span>⚡ عروض الصيف – خصومات تصل إلى ٤٠٪</span>
          <span>💪 تسوق واستشر خبراء التغذية على مدار الساعة</span>
          <span>🚚 شحن مجاني على الطلبات أكثر من ١٩٩ ريال</span>
          <span>⚡ عروض الصيف – خصومات تصل إلى ٤٠٪</span>
        </div>
      </div>

      <header className={styles.header} style={{ boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,.1)' : '0 1px 0 var(--border)' }}>
        <div className="container">
          <nav className={styles.topNav}>
            
            <div className={styles.navLeft}>
              <button className={styles.hamburger} aria-label="فتح القائمة">
                <span /><span /><span />
              </button>
              <button className={styles.iconBtn} title="اللغة والعملة" aria-label="اللغة">
                <i className="fa-solid fa-globe" />
              </button>
              <div className={styles.headerContact}>
                <a href="tel:+966591640335"><i className="fa-solid fa-phone" /> +966591640335</a>
              </div>
            </div>

            <div className={styles.navCenter}>
              <Link href="/" className={styles.navLogo}>
                <img
                  src="/logo.png"
                  alt="نحو الرشاقة - To Fitness"
                  style={{ maxHeight: '60px', width: 'auto' }}
                />
              </Link>
            </div>

            <div className={styles.navRight}>
              <button className={styles.iconBtn} aria-label="بحث" title="بحث">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <button className={styles.iconBtn} aria-label="السلة" title="سلة التسوق">
                <i className="fa-solid fa-basket-shopping" />
                <span className={styles.cartCount}>٣</span>
              </button>
              <Link href="/login" className={styles.loginBtn}>
                <i className="fa-regular fa-user" />
                <span className={styles.btnText}>تسجيل الدخول</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className={styles.subNav}>
          <div className="container">
            <div className={styles.subNavInner}>
              <Link href="/" className={styles.active}>الرئيسية</Link>
              <Link href="#">أحدث المنتجات</Link>
              <Link href="#">التغذية</Link>
              <Link href="#">السناكس الصحية</Link>
              <Link href="#">طرد السوائل</Link>
              <Link href="#">الاشتراكات</Link>
              <Link href="#">المدونة</Link>
              <Link href="#">من نحن</Link>
              <Link href="#">تواصل معنا</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
