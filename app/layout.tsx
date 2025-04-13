import React, { Suspense } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Analytics from "@/app/analytics";

export const metadata: Metadata = {
  verification: {
    yandex: "b2563083b856b8fa",
    google: "mhCrUZ_agoGt5Zst9mllZvMhl4HLaQFuIsKExpPRiZI",
  },
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <main>
          <Header />
          {children}
          <Footer />

          <Suspense>
            <Analytics />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
