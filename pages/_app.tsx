import Layout from "@components/layout";
import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps, NextWebVitalsMetric  } from "next/app";
import Head from "next/head";
import Script from "next/script";

const App = ({ Component, pageProps  }: AppProps) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1AAF9D" />
      </Head>

      <Script id="google-analytics" strategy="afterInteractive">
        {/* <!-- Google Tag Manager --> */}
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KRKH4NS');
          `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};


export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default appWithTranslation(App);
