import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="description" content="quranku" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="keywords"
            content="Quranku, quranku, website baca quran, membaca al quran, read quran, quran"
          />
          <link
            type="image/png"
            sizes="16x16"
            rel="icon"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            type="image/png"
            sizes="32x32"
            rel="icon"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            type="image/png"
            sizes="96x96"
            rel="icon"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            type="image/png"
            sizes="120x120"
            rel="icon"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="57x57"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="60x60"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="72x72"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="76x76"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="114x114"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="120x120"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="144x144"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="152x152"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <link
            color="#26E07F"
            rel="mask-icon"
            href="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="https://img.icons8.com/external-others-bzzricon-studio/100/000000/external-quran-ramadan-others-bzzricon-studio-2.png"
          />
          <meta name="msapplication-TileColor" content="#C0FFEE"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
