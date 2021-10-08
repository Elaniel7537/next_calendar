import Document, { Html, Head, Main, NextScript } from 'next/document'
import packageJson from '../package.json';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="version" content={packageJson.version} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument