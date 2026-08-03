import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/sections/HeroSlider';
import ProductCard from '@/components/ui/ProductCard';
import ProductSlider from '@/components/sections/ProductSlider';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import Link from 'next/link';

/* ── Section 4: وصل حديثاً ── */
const PRODUCTS_NEW = [
  { id: 1, title: 'بروتين واي عضوي طبيعي', image: '/mockup_protein.png', currentPrice: 189, oldPrice: 249, discountBadge: '٢٤٪ خصم', newBadge: true, rating: 5, reviewsCount: 24 },
  { id: 2, title: 'كولاجين مارين مع فيتامين C', image: '/mockup_collagen.png', currentPrice: 229, rating: 4.5, reviewsCount: 18 },
];

/* ── Section 5: عروض الصيف ── */
const PRODUCTS_SUMMER = [
  { id: 3, title: 'قهوة خضراء مع الكراتين', image: '/mockup_green_coffee.png', currentPrice: 149, oldPrice: 199, discountBadge: '٢٥٪ خصم', rating: 5, reviewsCount: 36 },
  { id: 4, title: 'فيتامين D3 + K2', image: '/mockup_vitamin_d.png', currentPrice: 99, oldPrice: 139, discountBadge: '٢٩٪ خصم', rating: 4.5, reviewsCount: 41 },
  { id: 5, title: 'شاي أخضر للتخسيس', image: '/mockup_supplements.png', currentPrice: 69, oldPrice: 99, discountBadge: '٣٠٪ خصم' },
  { id: 6, title: 'مكمل أوميغا 3 الطبيعي', image: '/mockup_collagen.png', currentPrice: 119, oldPrice: 149, discountBadge: '٢٠٪ خصم' },
  { id: 7, title: 'حبوب حرق الدهون النباتية', image: '/mockup_green_coffee.png', currentPrice: 179 },
  { id: 8, title: 'برنامج التخسيس 30 يوم', image: '/mockup_protein.png', currentPrice: 399, oldPrice: 469, discountBadge: '١٥٪ خصم' },
  { id: 30, title: 'كبسولات الشاي الأخضر', image: '/mockup_vitamin_d.png', currentPrice: 89, oldPrice: 119, discountBadge: '٢٥٪ خصم' },
  { id: 31, title: 'مكمل المغنيسيوم', image: '/mockup_supplements.png', currentPrice: 79, rating: 5, reviewsCount: 12 },
];

/* ── Section 7: عروض الاشتراكات ── */
const PRODUCTS_SUBSCRIPTIONS = [
  { id: 9, title: 'اشتراك شهري - برنامج التخسيس', image: '/mockup_protein.png', currentPrice: 299, oldPrice: 399, discountBadge: '٢٥٪ خصم', rating: 5, reviewsCount: 15 },
  { id: 10, title: 'اشتراك 3 أشهر - برنامج بناء العضلات', image: '/mockup_supplements.png', currentPrice: 699, oldPrice: 899, discountBadge: '٢٢٪ خصم', rating: 5, reviewsCount: 8 },
];

/* ── Section 9: منتجات طرد السوائل والأملاح ── */
const PRODUCTS_DETOX = [
  { id: 11, title: 'كبسولات طرد السوائل', image: '/mockup_supplements.png', currentPrice: 89, oldPrice: 119, discountBadge: '٢٥٪ خصم', rating: 5, reviewsCount: 22 },
  { id: 12, title: 'شاي التنحيف الأخضر', image: '/mockup_green_coffee.png', currentPrice: 59, rating: 4.5, reviewsCount: 31 },
  { id: 13, title: 'مكمل تصريف السوائل', image: '/mockup_vitamin_d.png', currentPrice: 109, oldPrice: 139, discountBadge: '٢٢٪ خصم' },
  { id: 14, title: 'أعشاب طبيعية للتخلص من الأملاح', image: '/mockup_collagen.png', currentPrice: 79, rating: 5, reviewsCount: 18 },
  { id: 15, title: 'كبسولات الهندباء', image: '/mockup_protein.png', currentPrice: 99, oldPrice: 129, discountBadge: '٢٣٪ خصم' },
  { id: 16, title: 'مشروب الديتوكس', image: '/mockup_supplements.png', currentPrice: 69, rating: 5, reviewsCount: 45 },
  { id: 17, title: 'شاي البابونج للتصريف', image: '/mockup_green_coffee.png', currentPrice: 49, oldPrice: 69, discountBadge: '٢٩٪ خصم' },
  { id: 18, title: 'حبوب البوتاسيوم الطبيعي', image: '/mockup_vitamin_d.png', currentPrice: 89, rating: 4.5, reviewsCount: 14 },
  { id: 19, title: 'مكمل الكركم والزنجبيل', image: '/mockup_collagen.png', currentPrice: 119, oldPrice: 149, discountBadge: '٢٠٪ خصم' },
];

/* ── Section 11: سناكس ── */
const PRODUCTS_SNACKS = [
  { id: 20, title: 'بروتين بار شوكولاتة', image: '/mockup_protein.png', currentPrice: 15, rating: 5, reviewsCount: 88 },
  { id: 21, title: 'بروتين بار كراميل', image: '/mockup_collagen.png', currentPrice: 15, rating: 5, reviewsCount: 67 },
  { id: 22, title: 'رقائق بروتين مقرمشة', image: '/mockup_green_coffee.png', currentPrice: 25, oldPrice: 35, discountBadge: '٢٩٪ خصم' },
  { id: 23, title: 'كوكيز بروتين', image: '/mockup_vitamin_d.png', currentPrice: 19, rating: 4.5, reviewsCount: 42 },
  { id: 24, title: 'شوكولاتة داكنة صحية', image: '/mockup_supplements.png', currentPrice: 29, rating: 5, reviewsCount: 55 },
  { id: 25, title: 'مكسرات مشكلة بالبروتين', image: '/mockup_protein.png', currentPrice: 39, oldPrice: 49, discountBadge: '٢٠٪ خصم' },
  { id: 26, title: 'ألواح الجرانولا', image: '/mockup_collagen.png', currentPrice: 22, rating: 5, reviewsCount: 34 },
  { id: 27, title: 'بسكويت الشوفان', image: '/mockup_green_coffee.png', currentPrice: 18, rating: 4.5, reviewsCount: 28 },
  { id: 28, title: 'كيك بروتين بدون سكر', image: '/mockup_vitamin_d.png', currentPrice: 35, oldPrice: 45, discountBadge: '٢٢٪ خصم' },
  { id: 29, title: 'زبدة الفول السوداني', image: '/mockup_supplements.png', currentPrice: 45, rating: 5, reviewsCount: 61 },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ═══ 3. Hero Slider ═══ */}
        <HeroSlider />

        {/* ═══ 4. وصل حديثاً (New Arrivals — Tab Style) ═══ */}
        <section className="container" style={{ marginBottom: '48px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{
              display: 'inline-block',
              padding: '10px 28px',
              border: '2px solid var(--primary)',
              borderRadius: '30px',
              fontSize: '.95rem',
              fontWeight: 800,
              color: 'var(--primary)',
              background: 'transparent',
              cursor: 'pointer',
            }}>
              وصــــل حديــــثاً
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {PRODUCTS_NEW.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* ═══ 5. عروض الصيف (Summer Offers) ═══ */}
        <section className="container" style={{ marginBottom: '48px' }}>
          <div className="d-flex justify-between align-center mb-24">
            <h2 className="section-title mb-0" style={{ flex: 1 }}>
              عروض الصيف
              <Link href="#" className="title-link">عرض الكل <i className="fa-solid fa-arrow-left"></i></Link>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {PRODUCTS_SUMMER.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* ═══ 6. Two Banners ═══ */}
        <section className="container" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <a href="https://wa.me/966591640335" className="promo-banner" style={{ aspectRatio: '3/2' }}>
              <img src="https://cdn.salla.sa/form-builder/QILJO4Ez4VT34YcMD2K5dqNvFByBsqZUj24nZqLs.jpg" alt="احجز موعدك الآن" />
              <div className="overlay"><span>احجز موعدك الآن</span></div>
            </a>
            <a href="#" className="promo-banner" style={{ aspectRatio: '3/2' }}>
              <img src="https://cdn.salla.sa/form-builder/Z2xglame49H8jSFFYc1ee3Ne5GVx7jFw9m2w2dfC.webp" alt="سناب" />

            </a>
          </div>
        </section>

        {/* ═══ 7. عروض الاشتراكات (Subscription Offers — Tab Style) ═══ */}
        <section className="container" style={{ marginBottom: '48px', paddingTop: '40px', paddingBottom: '40px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{
              display: 'inline-block',
              padding: '10px 28px',
              border: '2px solid var(--primary)',
              borderRadius: '30px',
              fontSize: '.95rem',
              fontWeight: 800,
              color: 'var(--primary)',
              background: 'transparent',
              cursor: 'pointer',
            }}>
              عــــروض الاشـــــتراكـــات
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {PRODUCTS_SUBSCRIPTIONS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* ═══ 8. Full-width Banner ═══ */}
        <section className="container" style={{ marginBottom: '48px' }}>
          <a href="#" className="promo-banner">
            <img
              src="https://cdn.salla.sa/form-builder/8mH1xr0ItDnUFturQGOnSWiB4hTaO1G62w6O5bPn.webp"
              alt="عروض حصرية"
            />
            <div className="overlay"><span>احجز موعدك الآن</span></div>
          </a>
        </section>

        {/* ═══ 9. منتجات طرد السوائل والأملاح (Product Slider) ═══ */}
        <ProductSlider
          title="منتجات طرد السوائل والأملاح"
          products={PRODUCTS_DETOX}
        />

        {/* ═══ 10. Another Full-width Banner ═══ */}
        <section className="container" style={{ marginBottom: '48px' }}>
          <a href="#" className="promo-banner">
            <img
              src="https://cdn.salla.sa/form-builder/rPhNVi1IUbK2HQFOF5k4DQoWKJw90dgXySKe35BY.jpg"
              alt="عروض خاصة"
            />
            <div className="overlay"><span>احجز موعدك الآن</span></div>
          </a>
        </section>

        {/* ═══ 11. سناكس (Product Slider) ═══ */}
        <ProductSlider
          title="سناكس"
          products={PRODUCTS_SNACKS}
        />

        {/* ═══ 12. آراء العملاء (Testimonials Slider) ═══ */}
        <TestimonialsSlider />

        {/* ═══ 13. Features Strip ═══ */}
        <section className="container" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: 'fa-medal', title: 'منتجات عالمية', desc: 'أكثر من ١٠٠ منتج لحياة صحية' },
              { icon: 'fa-headset', title: 'خدمة متكاملة', desc: 'تسوق واستشر خبراء التغذية على مدار الساعة' },
              { icon: 'fa-credit-card', title: 'ادفع الآن أو لاحقاً', desc: 'اختر من بين وسائل الدفع الأجل والمباشر بأمان تام' }
            ].map((feature, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                background: 'var(--bg-grey)',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'var(--transition)',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: 'var(--primary-pale)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', color: 'var(--primary)',
                  margin: '0 auto 16px'
                }}>
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ fontSize: '.88rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
