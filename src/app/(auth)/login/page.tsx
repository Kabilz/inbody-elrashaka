'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../AuthLayout.module.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className={styles.title}>تسجيل الدخول</h1>
      <p className={styles.desc}>قم بتسجيل الدخول لمتابعة طلباتك وبرامجك الغذائية</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>البريد الإلكتروني أو رقم الجوال</label>
          <div className={styles.inputWrap}>
            <input type="text" className={styles.input} placeholder="ادخل البريد أو الجوال" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className="d-flex justify-between align-center mb-0">
            <label className={styles.label} style={{ marginBottom: 0 }}>كلمة المرور</label>
            <Link href="/forgot-password" style={{ fontSize: '.8rem', color: 'var(--primary)', fontWeight: 600 }}>نسيت كلمة المرور؟</Link>
          </div>
          <div className={styles.inputWrap} style={{ marginTop: '8px' }}>
            <input type={showPassword ? "text" : "password"} className={styles.input} placeholder="ادخل كلمة المرور" required />
            <i 
              className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.inputIcon}`} 
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>تسجيل الدخول</button>
      </form>

      <div className={styles.socialAuth}>
        <div className={styles.divider}>أو سجل الدخول بواسطة</div>
        <button className={styles.socialBtn}>
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
          المتابعة باستخدام Google
        </button>
        <button className={styles.socialBtn}>
          <i className="fa-brands fa-apple" style={{ fontSize: '1.2rem' }}></i>
          المتابعة باستخدام Apple
        </button>
      </div>

      <div className={styles.bottomLink}>
        ليس لديك حساب؟ <Link href="/register">إنشاء حساب جديد</Link>
      </div>
    </>
  );
}
