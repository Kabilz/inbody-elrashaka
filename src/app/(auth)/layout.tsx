import React from 'react';
import Link from 'next/link';
import styles from './AuthLayout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Link href="/" className={styles.closeBtn}>
            <i className="fa-solid fa-xmark"></i>
          </Link>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>تسجيل الدخول</h1>
            <div className={styles.userIconWrap}>
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
