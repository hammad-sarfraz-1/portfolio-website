import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';

// Import existing components
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

function Home({ portfolioData }) {
  // Generate structured data for SEO
  const getSkillsList = () => {
    if (!portfolioData.skills) return [];
    return Object.values(portfolioData.skills).flat();
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Kamal",
    "alternateName": ["oykamal", "oyekamal", "kamal"],
    "jobTitle": "Senior Backend Engineer",
    "description": portfolioData.personal?.bio,
    "url": "https://oykamal.netlify.app",
    "image": portfolioData.personal?.image,
    "email": portfolioData.personal?.email,
    "telephone": portfolioData.personal?.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "Pakistan"
    },
    "sameAs": portfolioData.social?.map(s => s.url) || [],
    "knowsAbout": getSkillsList(),
    "alumniOf": portfolioData.education?.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution
    })) || [],
    "worksFor": portfolioData.experience?.[0] ? {
      "@type": "Organization",
      "name": portfolioData.experience[0].company
    } : undefined
  };

  return (
    <div className="home-page">
      <SEO
        title="oykamal - Muhammad Kamal | Senior Backend Engineer | Python Django PostgreSQL AWS"
        description="oykamal (Muhammad Kamal) - Senior Backend Engineer with 4+ years experience. Expert in Python, Django, DRF, PostgreSQL, AWS, Kafka, Redis. Building scalable production systems in Islamabad, Pakistan."
        name="oykamal"
        keywords="oykamal, oyekamal, Muhammad Kamal, kamal backend engineer, python backend developer, django developer pakistan, senior backend engineer, python django postgresql, aws developer, backend engineer islamabad"
        structuredData={structuredData}
      />
      <Hero
        personal={portfolioData.personal}
        social={portfolioData.social}
      />
      <About bio={portfolioData.personal?.bio} />
      <Experience experience={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Education
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />

      {/* YouTube Teaser Section */}
      <section className="youtube-teaser">
        <div className="container">
          <h2 className="section-title">My YouTube Channels</h2>
          <p className="teaser-subtitle">
            Creating content about tech, coding, and lifestyle
          </p>
          <div className="teaser-content">
            <div className="teaser-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
              </svg>
            </div>
            <div className="teaser-text">
              <h3>2 Active Channels</h3>
              <p>Daily content covering tech insights, coding tutorials, career advice, and more!</p>
              <ul className="teaser-highlights">
                <li>🎬 <strong>@oykamal</strong> - Blogs, vlogs & tech insights</li>
                <li>💻 <strong>@kamalkecoding</strong> - Coding tutorials & best practices</li>
              </ul>
            </div>
          </div>
          <Link to="/youtube" className="view-channels-btn">
            Explore My YouTube Channels →
          </Link>
        </div>
      </section>

      <Contact
        personal={portfolioData.personal}
        portfolioData={portfolioData}
      />
    </div>
  );
}

export default Home;
