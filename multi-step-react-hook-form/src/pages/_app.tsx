import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Multi Step Form Using react-hook-form Library</title>
        <meta
          name="description"
          content="Application containing a simple multi step form that uses react context and react-hook-form library with validations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
