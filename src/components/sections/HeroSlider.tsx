'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=1920',
    title: 'وصل حديثاً\nمنتجات عالمية',
    desc: 'اكتشف أحدث منتجات التغذية والرشاقة المختارة بعناية',
    btnText: 'تسوق الآن',
    btnLink: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1920',
    title: 'احجز موعدك\nمع خبير التغذية',
    desc: 'أخصائيونا يساعدونك في تحقيق وزنك المثالي',
    btnText: 'احجز الآن',
    btnIcon: 'fa-brands fa-whatsapp',
    btnLink: 'https://wa.me/message/6QQRH7S62HYCA1'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1920',
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
