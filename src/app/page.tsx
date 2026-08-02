import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

const PRODUCTS = [
  { id: 1, title: 'بروتين واي عضوي طبيعي', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/AaVQvyXWFHnpvJiAdP5Cm5WfW8AMCpgqcPYGEFJM.jpg', currentPrice: 189, oldPrice: 249, discountBadge: '٢٤٪ خصم', newBadge: true, rating: 5, reviewsCount: 24 },
  { id: 2, title: 'كولاجين مارين مع فيتامين C', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/Iz5ZAEPNEqWHBjRFkY1A8PFcSa22HXyp2iJiGVSk.jpg', currentPrice: 229, rating: 4.5, reviewsCount: 18 },
  { id: 3, title: 'قهوة خضراء مع الكراتين', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/EDAiOODl5ysNaTG17RnPGKm5uLJUlWs7dLvHp5k9.jpg', currentPrice: 149, oldPrice: 199, discountBadge: '٢٥٪ خصم', rating: 5, reviewsCount: 36 },
  { id: 4, title: 'فيتامين D3 + K2', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/kpNqXnEKRh7PL7MvMfkFAbQ4j8JfYerR42xOuCnl.jpg', currentPrice: 99, oldPrice: 139, discountBadge: '٢٩٪ خصم', rating: 4.5, reviewsCount: 41 },
];

const SUMMER_OFFERS = [
  { id: 5, title: 'شاي أخضر للتخسيس', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/wPdGnFONy5YifbaTfbk4Nf5GGC3L8OlrqTwWOEGz.jpg', currentPrice: 69, oldPrice: 99, discountBadge: '٣٠٪ خصم' },
  { id: 6, title: 'مكمل أوميغا 3 الطبيعي', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/GFdlIH9bXv2B2OgkB0s3oaNJ2EVgxLxS4EibZkFv.jpg', currentPrice: 119, oldPrice: 149, discountBadge: '٢٠٪ خصم' },
  { id: 7, title: 'حبوب حرق الدهون النباتية', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/YRe6b2b1bvHKFr40voxAJPIFCHVOqJJmAlVz6hb0.jpg', currentPrice: 179 },
  { id: 8, title: 'برنامج التخسيس 30 يوم', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/qnbDd/8YFalU7Qmy0hHwRqaTh16tKNqnFnQWPetQ0kDvj5.jpg', currentPrice: 399, oldPrice: 469, discountBadge: '١٥٪ خصم' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />

        {/* New Arrivals */}
        <section className="container mb-64 animate-fade-in-up delay-1">
          <div className="d-flex justify-between align-center mb-24">
            <h2 className="section-title mb-0" style={{ flex: 1 }}>
              وصـل حديثاً
              <Link href="#" className="title-link">عرض الكل <i className="fa-solid fa-arrow-left"></i></Link>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Summer Offers */}
        <section className="container mb-64 animate-fade-in-up delay-2">
          <div className="d-flex justify-between align-center mb-24">
            <h2 className="section-title mb-0" style={{ flex: 1 }}>
              عروض الصيف
              <Link href="#" className="title-link">عرض الكل <i className="fa-solid fa-arrow-left"></i></Link>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {SUMMER_OFFERS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Banners */}
        <section className="container mb-64 animate-fade-in-up delay-3">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '3/2', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <img src="https://cdn.salla.sa/form-builder/QILJO4Ez4VT34YcMD2K5dqNvFByBsqZUj24nZqLs.jpg" alt="احجز" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '3/2', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <img src="https://cdn.salla.sa/form-builder/Z2xglame49H8jSFFYc1ee3Ne5GVx7jFw9m2w2dfC.webp" alt="سناب" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mb-64 animate-fade-in-up delay-3">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: 'fa-medal', title: 'منتجات عالمية', desc: 'أكثر من ١٠٠ منتج لحياة صحية' },
              { icon: 'fa-headset', title: 'خدمة متكاملة', desc: 'تسوق واستشر خبراء التغذية' },
              { icon: 'fa-credit-card', title: 'ادفع الآن أو لاحقاً', desc: 'اختر من بين وسائل الدفع المتعددة' }
            ].map((feature, idx) => (
              <div key={idx} style={{ padding: '32px 24px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)', textAlign: 'center', transition: 'var(--transition)' }} className="hover:-translate-y-2 hover:shadow-lg">
                <div style={{ width: '64px', height: '64px', background: 'var(--primary-pale)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', margin: '0 auto 20px' }}>
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ fontSize: '.9rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
