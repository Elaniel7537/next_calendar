import { AppProps } from 'next/app';
import Head from 'next/head'

import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';

import '@styles/globals.css';

const MyApp: any = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Calendario</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans"
          rel="stylesheet"
        />
      </Head>
      <ConfigProvider locale={esES}>
          <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
};

export default MyApp;
