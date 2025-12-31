import { Link } from 'react-router-dom';
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
  return (
    <div className="home-page">
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
