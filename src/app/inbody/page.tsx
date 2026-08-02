'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Activity, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic'] });

// --- Components ---

function AnimatedImage() {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="relative w-full max-w-[400px] aspect-[3/4] max-h-[600px] flex flex-col items-center justify-center bg-transparent rounded-[28px]"
    >
       <Image 
         src="https://cdn.salla.sa/form-builder/z1hXqgJb4uC1l1hA.png" 
         alt="جهاز تحليل مكونات الجسم"
         fill
         className="object-contain drop-shadow-xl z-10"
         onError={(e) => {
           e.currentTarget.style.display = 'none';
           if (e.currentTarget.parentElement) {
             const fallback = document.createElement('div');
             fallback.className = 'absolute inset-0 flex flex-col items-center justify-center text-[#2196F3]/20';
             fallback.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
               <p class="mt-4 text-gray-400 font-medium text-lg">صورة جهاز الفحص</p>
             `;
             e.currentTarget.parentElement.appendChild(fallback);
           }
         }}
       />
    </motion.div>
  );
}

function SectionTitle() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2196F3] mb-6">
        احصل على فحص واستشارة مجانية
      </h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-[#63D471] text-lg font-bold ml-2 mt-0.5">✔</span>
          <span className="text-lg leading-relaxed font-medium">فحص كامل يشمل الوزن، نسبة الدهون، العضلات، السوائل، العظام، معدل الحرق.</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#63D471] text-lg font-bold ml-2 mt-0.5">✔</span>
          <span className="text-lg leading-relaxed font-medium">معرفة النظام الغذائي المناسب لحالتك.</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#63D471] text-lg font-bold ml-2 mt-0.5">✔</span>
          <span className="text-lg leading-relaxed font-medium">استشارة مجانية للوصول للوزن المثالي بطريقة صحية.</span>
        </li>
      </ul>
    </div>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

function InputField({ label, required, ...props }: InputFieldProps) {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01, boxShadow: '0 4px 15px rgba(33, 150, 243, 0.1)' }}
        transition={{ duration: 0.2 }}
        className="h-[56px] px-4 w-full rounded-[14px] border border-[#E5E7EB] bg-white focus:bg-white focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-all text-gray-800 placeholder:text-gray-400"
        {...props}
      />
    </div>
  );
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
}

function SelectField({ label, options, required, ...props }: SelectFieldProps) {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <motion.select
          whileFocus={{ scale: 1.01, boxShadow: '0 4px 15px rgba(33, 150, 243, 0.1)' }}
          transition={{ duration: 0.2 }}
          className="appearance-none h-[56px] px-4 w-full rounded-[14px] border border-[#E5E7EB] bg-white focus:bg-white focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-all text-gray-800 cursor-pointer"
          {...props}
        >
          <option value="" disabled selected>اختر...</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>{opt.label}</option>
          ))}
        </motion.select>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
}

interface SubmitButtonProps {
  isLoading: boolean;
  text: string;
}

function SubmitButton({ isLoading, text }: SubmitButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={isLoading}
      className="h-[56px] w-[170px] bg-[#2196F3] hover:bg-[#1E88E5] text-white font-bold text-lg rounded-[14px] shadow-[0_4px_15px_rgba(33,150,243,0.3)] flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={24} />
      ) : (
        text
      )}
    </motion.button>
  );
}

function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative mt-6">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="w-full flex flex-col"
          >
            <InputField 
              label="الاسم الكريم" 
              name="name"
              type="text" 
              placeholder="الاسم" 
              required 
            />
            
            <InputField 
              label="جوال واتساب" 
              name="phone"
              type="tel" 
              placeholder="05X XXX XXXX" 
              dir="ltr"
              className="text-right h-[56px] px-4 w-full rounded-[14px] border border-[#E5E7EB] bg-white focus:bg-white focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-all text-gray-800 placeholder:text-gray-400"
              required 
            />

            <SelectField
              label="الفرع الأقرب لك ؟"
              name="branch"
              required
              options={[
                { label: 'الرياض', value: 'riyadh' },
                { label: 'جدة', value: 'jeddah' },
                { label: 'الدمام', value: 'dammam' },
              ]}
            />

            <SelectField
              label="هل تريد الوصول للوزن المثالي ؟"
              name="goal"
              required
              options={[
                { label: 'نعم، بالتأكيد', value: 'yes' },
                { label: 'أريد معرفة المزيد', value: 'maybe' },
              ]}
            />

            <div className="flex justify-end mt-2">
              <SubmitButton isLoading={isLoading} text="سجل الآن" />
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            >
              <CheckCircle2 size={80} className="text-[#63D471] mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">تم تسجيل طلبك بنجاح!</h3>
            <p className="text-gray-600 text-lg">سيتواصل معك أحد خبرائنا في أقرب وقت لتأكيد الموعد.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-[#2196F3] font-semibold hover:underline"
            >
              تسجيل طلب آخر
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InBodyLandingPage() {
  return (
    <div className={`min-h-screen ${cairo.className} bg-gradient-to-b from-[#62d26f] via-[#72d9c4] to-[#76c8ff] rtl:dir-rtl`} dir="rtl">
      <main className="min-h-screen w-full py-12 px-4 flex flex-col items-center justify-center">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 z-10 max-w-4xl px-4"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-snug drop-shadow-md">
            الآن تقدر تسوي الفحص الشامل وتتعرف على تفاصيل جسمك
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2196F3] drop-shadow-sm bg-white/30 inline-block px-6 py-2 rounded-full backdrop-blur-md">
            واعرف جسمك إيش يحتاج لتوصل للوزن المثالي
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full max-w-[1300px] overflow-hidden flex flex-col lg:flex-row relative z-10"
        >
          {/* Left Column - Image */}
          <div className="w-full lg:w-[40%] p-8 lg:p-12 flex items-center justify-center relative bg-white">
            <AnimatedImage />
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-[60%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-white">
            <SectionTitle />
            <LeadForm />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
