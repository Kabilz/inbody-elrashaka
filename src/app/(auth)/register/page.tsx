'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../AuthLayout.module.css';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className={styles.title}>إنشاء حساب جديد</h1>
      <p className={styles.desc}>انضم إلى عائلة نحو الرشاقة وابدأ رحلتك الصحية اليوم</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>الاسم الكامل</label>
          <div className={styles.inputWrap}>
            <input type="text" className={styles.input} placeholder="الاسم الثلاثي" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>رقم الجوال</label>
          <div className={styles.inputWrap}>
            <input type="tel" className={styles.input} placeholder="05xxxxxxxx" required style={{ direction: 'ltr', textAlign: 'right' }} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>البريد الإلكتروني</label>
          <div className={styles.inputWrap}>
            <input type="email" className={styles.input} placeholder="example@domain.com" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>كلمة المرور</label>
          <div className={styles.inputWrap}>
            <input type={showPassword ? "text" : "password"} className={styles.input} placeholder="ادخل كلمة المرور" required />
            <i 
              className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.inputIcon}`} 
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className={styles.formGroup} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '20px' }}>
          <input type="checkbox" id="terms" required style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
          <label htmlFor="terms" style={{ fontSize: '.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
            أوافق على <Link href="#" style={{ color: 'var(--primary)' }}>الشروط والأحكام</Link> و <Link href="#" style={{ color: 'var(--primary)' }}>سياسة الخصوصية</Link>
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>إنشاء حساب</button>
      </form>

      <div className={styles.bottomLink}>
        لديك حساب بالفعل؟ <Link href="/login">تسجيل الدخول</Link>
      </div>
    </>
  );
}
