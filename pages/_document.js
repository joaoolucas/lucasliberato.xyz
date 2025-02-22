import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
            rel="stylesheet"
          />
          <meta property="og:url" content="https://lucasliberato.xyz" />
          <meta property="og:site_name" content="Lucas Liberato" />
          <meta property="og:image" content="/img/profile-picture.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://lucasliberato.xyz/img/profile-picture.png" />
        </Head>
        <body className="text-black bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
