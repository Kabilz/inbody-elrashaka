import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  newBadge?: boolean;
  reviewsCount?: number;
}

export default function ProductCard({
  title,
  image,
  currentPrice,
  oldPrice,
  newBadge,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        {newBadge && <span className={`${styles.badge} ${styles.badgeNew}`}>جديد</span>}

        <img src={image} alt={title} loading="lazy" />

        <button className={styles.quickView} aria-label="عرض سريع">
          <i className="fa-regular fa-eye"></i>
        </button>
      </div>

      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.priceWrap}>
          <span className={styles.currentPrice}>{currentPrice.toLocaleString('ar-EG')} <img src="/riyal.svg" alt="ر.س" className={styles.riyalIcon} /></span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice.toLocaleString('ar-EG')} <img src="/riyal.svg" alt="ر.س" className={styles.riyalIconOld} /></span>}
        </div>
      </div>

      <button className={styles.atcBtn}>
        <i className="fa-solid fa-plus" /> أضف للسلة
      </button>
    </div>
  );
}
