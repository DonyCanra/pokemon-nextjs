// Meta.tsx
import React from "react";
import Head from "next/head";

const Meta: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="csrf-token" content="" />
      <meta name="keywords" content="Pokéx" />
      <meta name="description" content="Pokéx telah terbuka! Cek Pokémon favoritmu!" />
      <meta property="og:title" content="Pokéx | The official Pokémon Website in Indonesia" />
      <meta property="og:description" content="Pokéx telah terbuka! Cek Pokémon favoritmu!" />
      <meta property="og:image" content="https://id.portal-pokemon.com/img/common/og-image.png" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="The official Pokémon Website in Indonesia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
};

export default Meta;
