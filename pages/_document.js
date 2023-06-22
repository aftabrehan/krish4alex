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
    </Head>
    <body>
      <Main />
      <div id="modal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
