import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Fira+Code:wght@400;500&family=Preahvihear&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content="I'm a Graphic Designer (Ui/UX)!" />

      <meta name="author" content="Krishna Sharma" />
      <meta
        property="og:title"
        content="Top Rated UI/UX Designer - Krish4alex"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.https://krish4alex.vercel.app/"
      />
      <meta
        property="og:description"
        content="I'm a Graphic Designer (Ui/UX)!"
      />
      <meta
        property="og:image"
        content="https://https://krish4alex.vercel.app/assets/png/metaimage.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Top Rated UI/UX Designer - Krish4alex"
      />
      <meta
        property="twitter:description"
        content="I'm a Graphic Designer (Ui/UX)!"
      />
      <meta
        property="twitter:image"
        content="https://https://krish4alex.vercel.app/assets/png/metaimage.png"
      />
    </Head>
    <body>
      <Main />
      <div id="modal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
