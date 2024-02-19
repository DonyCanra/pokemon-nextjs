import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./common/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Pokémon | The official Pokémon Website in Indonesia</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
