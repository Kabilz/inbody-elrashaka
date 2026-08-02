import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  discountBadge?: string;
  newBadge?: boolean;
  rating?: number;
  reviewsCount?: number;
}

export default function ProductCard({
  title,
  image,
  currentPrice,
  oldPrice,
  discountBadge,
  newBadge,
  rating = 5,
  reviewsCount = 0
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        {discountBadge && <span className={`${styles.badge} ${styles.badgeSale}`}>{discountBadge}</span>}
        {newBadge && !discountBadge && <span className={`${styles.badge} ${styles.badgeNew}`}>جديد</span>}
        
        <img src={image} alt={title} loading="lazy" />
        
        <button className={styles.quickView}>عرض سريع</button>
      </div>
      
      <div className={styles.info}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <i key={i} className={i < Math.floor(rating) ? "fa-solid fa-star" : (i < rating ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star")} />
          ))}
          {reviewsCount > 0 && <span>({reviewsCount.toLocaleString('ar-EG')})</span>}
        </div>
        
        <h4 className={styles.title}>{title}</h4>
        
        <div className={styles.priceWrap}>
          <span className={styles.currentPrice}>{currentPrice.toLocaleString('ar-EG')} ر.س</span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice.toLocaleString('ar-EG')} ر.س</span>}
          {discountBadge && oldPrice && (
            <span className={styles.discount}>
              {Math.round(((oldPrice - currentPrice) / oldPrice) * 100).toLocaleString('ar-EG')}٪ خصم
            </span>
          )}
        </div>
        
        <button className={styles.atcBtn}>
          <i className="fa-solid fa-basket-shopping" /> أضف للسلة
        </button>
      </div>
    </div>
  );
}
