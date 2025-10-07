import NavBar from "@/layout/nav-bar/nav-bar";
import type { Metadata } from "next";
import Footer from "@/layout/footer/footer";
import I18nProvider from "@/providers/i18n-provider";
import "../../css/globals.css";
// import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "وثائق",
  description: "نحن نصنع حضورًا رقميًا يتحدّث عنك!",
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolvedParams?.locale || "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";


  return (
    <html lang={locale} dir={dir}>
      <body >
        <I18nProvider locale={locale}>
          <NavBar />
          <main className="max-w-[100vw] overflow-hidden">
          {/* <ClientLayout> */}
            {children}
            {/* </ClientLayout> */}
            </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
