import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://hammad-sarfraz.netlify.app';
const DEFAULT_IMAGE =
  'https://ui-avatars.com/api/?name=Mohammad+Hammad+Sarfraz&size=1200&background=111827&color=ffffff';
const DEFAULT_KEYWORDS =
  'Mohammad Hammad Sarfraz, Hammad Sarfraz, Software Engineer, Backend Engineer, Python, Django, Portfolio';
const TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE || '';

const SEO = ({ 
  title, 
  description, 
  name, 
  type = 'website',
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  structuredData
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter tags */}
      {TWITTER_HANDLE ? <meta name="twitter:creator" content={TWITTER_HANDLE} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  structuredData: PropTypes.object
};

export default SEO;
