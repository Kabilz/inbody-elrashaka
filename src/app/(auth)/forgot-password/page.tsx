'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../AuthLayout.module.css';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      <h1 className={styles.title}>استعادة كلمة المرور</h1>
      <p className={styles.desc}>
        {step === 1 ? 'ادخل رقم الجوال أو البريد الإلكتروني وسنرسل لك رمز التحقق' : 'أدخل رمز التحقق الذي وصلك لتعيين كلمة مرور جديدة'}
      </p>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (step === 1) setStep(2);
      }}>
        
        {step === 1 && (
          <div className={styles.formGroup}>
            <label className={styles.label}>رقم الجوال أو البريد الإلكتروني</label>
            <div className={styles.inputWrap}>
              <input type="text" className={styles.input} placeholder="ادخل الجوال أو البريد" required />
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>رمز التحقق</label>
              <div className={styles.inputWrap}>
                <input type="text" className={styles.input} placeholder="XXXX" required style={{ letterSpacing: '8px', textAlign: 'center' }} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>كلمة المرور الجديدة</label>
              <div className={styles.inputWrap}>
                <input type="password" className={styles.input} placeholder="ادخل كلمة المرور الجديدة" required />
              </div>
            </div>
          </>
        )}

        <button type="submit" className={styles.submitBtn}>
          {step === 1 ? 'إرسال رمز التحقق' : 'تغيير كلمة المرور'}
        </button>
      </form>

      <div className={styles.bottomLink}>
        تذكرت كلمة المرور؟ <Link href="/login">تسجيل الدخول</Link>
      </div>
    </>
  );
}
