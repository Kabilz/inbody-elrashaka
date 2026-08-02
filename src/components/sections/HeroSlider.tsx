'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const SLIDES = [
  {
    id: 1,
    image: 'https://cdn.files.salla.network/homepage/22564112/537b60cf-9b74-49d7-8a88-f8b7789b4ffa.webp',
    title: 'وصل حديثاً\nمنتجات عالمية',
    desc: 'اكتشف أحدث منتجات التغذية والرشاقة المختارة بعناية',
    btnText: 'تسوق الآن',
    btnLink: '#'
  },
  {
    id: 2,
    image: 'https://cdn.salla.sa/form-builder/QILJO4Ez4VT34YcMD2K5dqNvFByBsqZUj24nZqLs.jpg',
    title: 'احجز موعدك\nمع خبير التغذية',
    desc: 'أخصائيونا يساعدونك في تحقيق وزنك المثالي',
    btnText: 'احجز الآن',
    btnIcon: 'fa-brands fa-whatsapp',
    btnLink: 'https://wa.me/message/6QQRH7S62HYCA1'
  },
  {
    id: 3,
    image: 'https://cdn.salla.sa/form-builder/8mH1xr0ItDnUFturQGOnSWiB4hTaO1G62w6O5bPn.webp',
    title: 'عروض الصيف\nخصومات حصرية',
    desc: 'خصومات تصل حتى ٤٠٪ على أفضل منتجاتنا',
    btnText: 'اكتشف العروض',
    btnLink: '#summer-offers'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
  };

  const prev = () => {
    setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const next = () => {
    setCurrent(prev => (prev + 1) % SLIDES.length);
  };

  return (
    <section className={styles.hero} aria-label="شرائح الصور">
      <div 
        className={styles.track}
        style={{ transform: `translateX(${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.image} alt={slide.title} loading="eager" />
            <div className={styles.content}>
              <div className={styles.text}>
                <h2 style={{ whiteSpace: 'pre-line' }}>{slide.title}</h2>
                <p>{slide.desc}</p>
                <Link href={slide.btnLink} className={styles.btnPrimary}>
                  {slide.btnIcon && <i className={slide.btnIcon} style={{ marginLeft: '8px' }}></i>}
                  {slide.btnText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={prev} aria-label="السابق">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={next} aria-label="التالي">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className={styles.dots} role="tablist">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`الشريحة ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
