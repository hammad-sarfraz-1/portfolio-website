import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import YouTubePage from './pages/YouTubePage';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch portfolio data from JSON file
    fetch('/data/portfolio.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load portfolio data');
        }
        return response.json();
      })
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h1>Error Loading Portfolio</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!portfolioData) return null;

  return (
    <Router>
      <div className="App">
        <Navigation portfolioData={portfolioData} />
        <Routes>
          <Route path="/" element={<Home portfolioData={portfolioData} />} />
          <Route path="/youtube" element={<YouTubePage />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <p>© 2024 {portfolioData.personal?.name}. Built with ❤️ using React</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
