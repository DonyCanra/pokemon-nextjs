import Head from "next/head";

interface MetaHeadProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description, image, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="id_ID" />
      <meta name="twitter:card" content="List-pokemon-monster" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
    </Head>
  );
};

export default MetaHead;
