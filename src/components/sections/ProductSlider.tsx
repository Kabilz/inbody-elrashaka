'use client';

import React, { useRef } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import styles from './ProductSlider.module.css';

interface Product {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  discountBadge?: string;
  newBadge?: boolean;
  reviewsCount?: number;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductSlider({ title, products, viewAllLink = '#' }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 280;
      trackRef.current.scrollBy({
        left: direction === 'right' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleRow}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <a href={viewAllLink} className={styles.viewAll}>عرض الكل <i className="fa-solid fa-arrow-left"></i></a>
        </div>

        <div className={styles.sliderWrap}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('right')} aria-label="السابق">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className={styles.track} ref={trackRef}>
            {products.map(product => (
              <div className={styles.slide} key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => scroll('left')} aria-label="التالي">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
