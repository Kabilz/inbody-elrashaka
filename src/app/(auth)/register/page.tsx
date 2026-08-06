'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../AuthLayout.module.css';

export default function RegisterPage() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>اسمك الكريم</label>
          <div className={styles.inputWrap}>
            <input type="text" className={styles.input} placeholder="الاسم الأول" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>الاسم الأخير</label>
          <div className={styles.inputWrap}>
            <input type="text" className={styles.input} placeholder="الاسم الأخير" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>رقم الجوال</label>
          <div className={`${styles.inputWrap} ${styles.phoneWrap}`}>
            <input type="tel" className={`${styles.input} ${styles.phoneInput}`} placeholder="05xxxxxxxx" required style={{ direction: 'ltr', textAlign: 'left' }} />
            <div className={styles.countryCode}>
              <span>+20</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className={styles.formGroup} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '24px', justifyContent: 'center' }}>
          <label htmlFor="promo" style={{ fontSize: '.95rem', color: '#111', cursor: 'pointer', fontWeight: 600 }}>
            أرغب بتلقي الرسائل الترويجية عبر البريد الإلكتروني
          </label>
          <input type="checkbox" id="promo" defaultChecked style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary)' }} />
        </div>

        <button type="submit" className={styles.submitBtn}>التسجيل</button>
      </form>

      <div className={styles.privacyLink}>
        بالتسجيل، فإنك توافق على <Link href="#">سياسة الخصوصية</Link>
      </div>
    </>
  );
}
