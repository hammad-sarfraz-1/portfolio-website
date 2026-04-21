import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateCV } from '../services/pdfGenerator';

const Navigation = ({ portfolioData }) => {
    const location = useLocation();
    const isYouTubePage = location.pathname === '/youtube';
    const isBlogPage = location.pathname.startsWith('/blog');
    const hasYouTubeChannels = Boolean(portfolioData?.youtube?.channels?.length);

    const handleDownloadCV = () => {
        if (portfolioData) {
            generateCV(portfolioData);
        }
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="nav" id="nav">
            <div className="nav-container">
                <Link to="/" className="nav-logo" aria-label="Home">
                    <span className="nav-logo-icon" role="img" aria-hidden="true">💻</span>
                </Link>
                <ul className="nav-menu">
                    <li><a href="/#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="/#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                    <li><a href="/#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
                    <li><a href="/#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                    <li><a href="/#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                    <li><Link to="/blog" className={`nav-link ${isBlogPage ? 'active' : ''}`}>Blog</Link></li>
                    <li><a href="/#education" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
                    {hasYouTubeChannels ? <li><Link to="/youtube" className={`nav-link ${isYouTubePage ? 'active' : ''}`}>YouTube</Link></li> : null}
                    <li><a href="/#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>
                <button className="btn btn-primary" onClick={handleDownloadCV}>
                    <span className="btn-icon">📄</span>
                    Download CV
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
