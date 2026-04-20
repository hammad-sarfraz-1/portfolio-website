import YouTube from '../components/YouTube';
import SEO from '../components/SEO';
import './YouTubePage.css';

function YouTubePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://hammad-sarfraz.netlify.app';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "YouTube Channels",
    "description": "Tech content, coding tutorials, and software engineering insights",
    "author": {
      "@type": "Person",
      "name": "Mohammad Hammad Sarfraz"
    }
  };

  return (
    <div className="youtube-page">
      <SEO
        title="YouTube Channels | Mohammad Hammad Sarfraz"
        description="YouTube content featuring software engineering, coding, and technology insights."
        name="hammadsarfraz"
        url={`${siteUrl}/youtube`}
        structuredData={structuredData}
      />
      <YouTube />
    </div>
  );
}

export default YouTubePage;
