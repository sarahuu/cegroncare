import { site } from "../../data/site";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/images/c15.jpg",
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | Compassionate care in Aberdeen City and Aberdeenshire`;
  const url = `${site.baseUrl}${path}`;
  const socialImage = `${site.baseUrl}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}
