// Meta.tsx
import React from "react";
import Head from "next/head";

const Meta: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
      <meta content="Pokemon - list pokemon" name="description" />
      <meta content="Pokemon list" name="author" />
      <meta name="keywords" content="pokemon" />
      <link rel="icon" href="/images/brand/logo.png" type="image/x-icon" />
    </Head>
  );
};

export default Meta;
