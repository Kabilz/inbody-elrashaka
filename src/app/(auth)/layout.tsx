import React from 'react';
import Link from 'next/link';
import styles from './AuthLayout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/t6pC5j7rlwHJGYJezjbkPuAmdVtPMK98q2jF54YG.jpg" alt="نحو الرشاقة" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
