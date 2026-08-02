import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "متجر نحو الرشاقة - To Fitness Store",
  description: "مركز علاج السمنة والنحافة الشديدة. يضم خبراء تغذية متخصصين ومنتجات عالمية تساعدك في الوصول إلى وزنك المثالي.",
  icons: {
    icon: "https://cdn.salla.sa/qnbDd/5ArmBJxi69kW2YcPWpFjDqUiWhcxClvkhLzi0HF0.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
