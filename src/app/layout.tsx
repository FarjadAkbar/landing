import type { Metadata } from "next";
import Head from 'next/head';
import { Titillium_Web } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Link from "next/link";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
        <Head>
          <Link type="image/png" rel="apple-touch-icon" href={"/apple-touch-icon.png"} />
          <Link type="image/png" rel="icon" href={"/favicon-32x32.png"} />
          <Link type="image/png" rel="icon" href={"/favicon-16x16.png"} />
          <Link rel="manifest" href={"/site.webmanifest"} />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '803027207478070');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=803027207478070&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
      <body className={`${titillium.className} overflow-x-hidden antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
