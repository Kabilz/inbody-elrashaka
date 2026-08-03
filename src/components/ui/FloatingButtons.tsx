'use client';

import React, { useState, useEffect } from 'react';
import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a 
        href="https://wa.me/966591640335" 
        className={styles.waBtn} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="تواصل عبر الواتساب"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span>احجز موعدك الان</span>
      </a>

      <button 
        className={`${styles.scrollBtn} ${showScroll ? styles.visible : ''}`} 
        onClick={scrollToTop} 
        aria-label="العودة للأعلى"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
