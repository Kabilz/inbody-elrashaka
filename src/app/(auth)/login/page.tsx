'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../AuthLayout.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  // Using an array of refs
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code === '0000') {
      router.push('/register');
    } else {
      setError('الكود غير صحيح، حاول مرة أخرى');
    }
  };

  return (
    <>
      {step === 1 ? (
        <form onSubmit={handleEmailSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>البريد الإلكتروني</label>
            <div className={styles.inputWrap}>
              <input type="email" className={styles.input} placeholder="your@email.com" required />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>دخول</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <div style={{ textAlign: 'center', marginBottom: '24px', fontWeight: 600, color: 'var(--text-muted)' }}>
            أدخل رمز التحقق المرسل إلى بريدك الإلكتروني
          </div>
          <div className={styles.otpContainer}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                className={styles.otpInput}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                required
              />
            ))}
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <button type="submit" className={styles.submitBtn}>تحقق</button>
        </form>
      )}

      {step === 1 && (
        <div className={styles.socialAuth}>
          <div className={styles.divider}>أو سجل دخولك من خلال</div>
          <div className={styles.socialContainer}>
            <button className={styles.socialBtn} aria-label="Apple">
              <i className="fa-brands fa-apple"></i>
            </button>
            <button className={styles.socialBtn} aria-label="Facebook">
              <i className="fa-brands fa-facebook" style={{ color: '#1877f2' }}></i>
            </button>
            <button className={styles.socialBtn} aria-label="Google">
              <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
