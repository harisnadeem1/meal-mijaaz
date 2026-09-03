import React from 'react';
import { Helmet } from 'react-helmet';

const DEFAULT_SITE_NAME = 'Meal Mizaaj';
const DEFAULT_IMAGE = '/og-meal-mizaaj.jpg';

// Social + canonical tags only.
// Keep each page's literal <title> and <meta name="description"> inside that
// page's own <Helmet>, because the llms.txt build step reads those tags from
// the source code of each page file.
const Seo = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  siteName = DEFAULT_SITE_NAME,
  type = 'website',
  imageAlt = 'Meal Mizaaj personalised nutrition support',
}) => {
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://mealmizaaj.com';

  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname
      : '/';

  const canonical = url || `${origin}${currentPath}`;

  const socialImage = image
    ? image.startsWith('http')
      ? image
      : `${origin}${image.startsWith('/') ? image : `/${image}`}`
    : null;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />

      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_PK" />

      {title && <meta property="og:title" content={title} />}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {socialImage && <meta property="og:image" content={socialImage} />}

      {socialImage && (
        <meta property="og:image:secure_url" content={socialImage} />
      )}

      {socialImage && <meta property="og:image:width" content="1200" />}

      {socialImage && <meta property="og:image:height" content="630" />}

      {socialImage && (
        <meta property="og:image:alt" content={imageAlt} />
      )}

      <meta
        name="twitter:card"
        content={socialImage ? 'summary_large_image' : 'summary'}
      />

      {title && <meta name="twitter:title" content={title} />}

      {description && (
        <meta name="twitter:description" content={description} />
      )}

      {socialImage && <meta name="twitter:image" content={socialImage} />}

      {socialImage && (
        <meta name="twitter:image:alt" content={imageAlt} />
      )}
    </Helmet>
  );
};

export default Seo;
export { Seo };