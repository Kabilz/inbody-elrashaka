import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - الصفحة غير موجودة',
  description: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.',
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/sad-robot.png"
          alt="Sad Robot - 404"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>عذراً! الصفحة غير موجودة</h2>
      <p className={styles.description}>
        يبدو أنك ضللت الطريق. الروبوت الخاص بنا حزين جداً لأنه لم يتمكن من العثور على الصفحة التي تبحث عنها. 
      </p>
      <Link href="/" className={styles.homeButton}>
        <Home size={20} />
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
