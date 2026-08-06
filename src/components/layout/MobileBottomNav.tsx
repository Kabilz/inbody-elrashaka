'use client';

import React from 'react';
import Link from 'next/link';
import styles from './MobileBottomNav.module.css';

export default function MobileBottomNav() {
  return (
    <div className={styles.bottomNav}>
      <Link href="/" className={styles.navItem}>
        <i className="fa-solid fa-house"></i>
        <span>الرئيسية</span>
      </Link>
      <Link href="#" className={styles.navItem}>
        <i className="fa-solid fa-list-ul"></i>
        <span>التصنيفات</span>
      </Link>
      <Link href="/cart" className={styles.navItem}>
        <div className={styles.iconWrapper}>
          <i className="fa-solid fa-basket-shopping"></i>
          <span className={styles.cartCount}>0</span>
        </div>
        <span>السلة</span>
      </Link>
      <Link href="/login" className={styles.navItem}>
        <i className="fa-regular fa-user"></i>
        <span>تسجيل الدخول</span>
      </Link>
      <button className={styles.navItem}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span>بحث</span>
      </button>
    </div>
  );
}
