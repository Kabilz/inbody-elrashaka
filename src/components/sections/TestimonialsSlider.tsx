'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './TestimonialsSlider.module.css';

const TESTIMONIALS = [
  {
    name: 'ساره ساره',
    text: 'رائع المتجر والتعامل جميل ويردون على كل الاستفسارات بسرعة',
    rating: 5,
    gender: 'female'
  },
  {
    name: 'نوره العبدالعزيز',
    text: 'جدا جمييل والاسعار مرره ممتازه',
    rating: 5,
    gender: 'female'
  },
  {
    name: 'محمد العروي',
    text: 'منتجات رائعة',
    rating: 5,
    gender: 'male'
  },
  {
    name: 'تهاني T',
    text: 'اشكركم ساعدتوني كتير في نزول وزني حتي وصلت لوزني الطبيعي الله يجزيكم الجنه',
    rating: 5,
    gender: 'female'
  },
  {
    name: 'أحمد أبورشيد',
    text: 'منتجات ممتازة وخدمة عملاء رائعة',
    rating: 5,
    gender: 'male'
  },
  {
    name: 'امل الصليبي',
    text: 'تجربة تسوق رائعة ومنتجات أصلية',
    rating: 5,
    gender: 'female'
  },
  {
    name: 'محمد العروي',
    text: 'مفيد والقهوه والشاهي بطله',
    rating: 5,
    gender: 'male'
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetTimer();
  };

  const prev = () => {
    setCurrent(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    resetTimer();
  };

  const next = () => {
    setCurrent(p => (p + 1) % TESTIMONIALS.length);
    resetTimer();
  };

  const t = TESTIMONIALS[current];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleRow}>
          <h2 className={styles.sectionTitle}>آراء العملاء</h2>
          <a href="#" className={styles.viewAll}>عرض الكل <i className="fa-solid fa-arrow-left"></i></a>
        </div>

        <div className={styles.sliderWrap}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev} aria-label="السابق">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className={styles.card} key={current}>
            <div className={styles.inner}>
              <div className={styles.avatar}>
                <i className={`fa-solid ${t.gender === 'female' ? 'fa-user-tie' : 'fa-user'}`}></i>
              </div>
              <div className={styles.content}>
                <p className={styles.text}>{t.text}</p>
                <div className={styles.meta}>
                  <span className={styles.name}>{t.name}</span>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={i < t.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                    ))}
                  </div>
                </div>
              </div>
              <i className={`fa-solid fa-quote-right ${styles.quoteIcon}`}></i>
            </div>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next} aria-label="التالي">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`التقييم ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
