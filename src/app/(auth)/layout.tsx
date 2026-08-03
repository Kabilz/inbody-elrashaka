import React from 'react';
import Link from 'next/link';
import styles from './AuthLayout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="نحو الرشاقة" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
