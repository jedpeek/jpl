import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
export const metadata = {
  title: `JPL`,
  description: `Jed Peek Lending blog provides information about mortgage and real estate markets`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="">
        <section className="min-h-screen flex flex-col min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
