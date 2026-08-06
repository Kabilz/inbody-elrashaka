'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>


      <header className={styles.header} style={{ boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,.1)' : '0 1px 0 var(--border)' }}>
        <div className="container">
          <nav className={styles.topNav}>

            <div className={styles.navLeft}>
              <button className={`${styles.iconBtn} ${styles.hamburgerIcon}`} aria-label="فتح القائمة" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className="fa-solid fa-bars-staggered" />
              </button>
              <button className={styles.iconBtn} title="اللغة والعملة" aria-label="اللغة">
                <i className="fa-solid fa-globe" />
              </button>

              <button className={`${styles.iconBtn} ${styles.mobileOnlyBtn}`} aria-label="الوضع الليلي">
                <i className="fa-regular fa-moon" />
              </button>
              <div className={styles.headerContact}>
                <a href="tel:0591640335"><i className="fa-solid fa-phone" /> 0591640335</a>
              </div>
            </div>

            <div className={styles.navCenter}>
              <Link href="/" className={styles.navLogo}>
                <img
                  src="/logo.png"
                  alt="روح الرشاقة"
                />
              </Link>
            </div>

            <div className={styles.navRight}>
              <Link href="/login" className={`${styles.iconBtn} ${styles.mobileOnlyBtn}`}>
                <i className="fa-regular fa-user" />
              </Link>
              <button className={`${styles.iconBtn} ${styles.desktopOnlyBtn}`} aria-label="بحث" title="بحث">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <button className={styles.iconBtn} aria-label="السلة" title="سلة التسوق">
                <i className="fa-solid fa-basket-shopping" />
                <span className={styles.cartCount}>0</span>
              </button>
              <Link href="/login" className={`${styles.loginBtn} ${styles.desktopOnlyBtn}`}>
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

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuClose} onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={styles.mobileMenuContent}>
          
          <button className={styles.redCloseBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className={styles.mobileMenuLinks}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>القائمة الرئيسية</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>تنظيف قولون</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>المدونة</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>جميع المنتجات</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>مكملات غذائية</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>تخفيضات</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>الاشتراكات و الانظمه الغذائيه</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className={styles.hasSub}>
              منتجات التنحيف
              <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px', color: '#888' }}></i>
            </Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>منتجات صحه القولون و الجهاز الهضمي</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>صحه المرأه</Link>
          </div>
        </div>
      </div>
    </>
  );
}
