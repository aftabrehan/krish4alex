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
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap"
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
