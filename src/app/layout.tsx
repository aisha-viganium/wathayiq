import type { Metadata } from "next";
import "../css/globals.css";
import NavBar from "../layout/nav-bar/nav-bar";
import Footer from "../layout/footer/footer";


export const metadata: Metadata = {
  title: "Viganium",
  description: "نحن نصنع حضورًا رقميًا يتحدّث عنك",
  icons: {
    icon: "/assets/logo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <main className="max-w-[100vw] overflow-hidden">
        <NavBar />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
