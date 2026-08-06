'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const SLIDES = [
  {
    id: 0,
    image: '/hero-image.png',
    title: 'عيادة التغذية',
    desc: 'تواصل معنا: 0591640335',
    btnLink: '/'
  },
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
            <Link href={slide.btnLink || '#'}>
              <img src={slide.image} alt={slide.title || 'Slide'} loading="eager" />
            </Link>
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
