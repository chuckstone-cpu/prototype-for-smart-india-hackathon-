import React from 'react';
import './index.css';
import AccordionGallery from './AccordionGallery';

export default function App() {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);

  const galleryItems = [
    { image: '/backgrounds/pexels-vincent-belho-54161054-8061236.jpg', label: 'Lush Valleys', description: 'Discover the serene beauty of the region.' },
    { image: '/backgrounds/pexels-votso-sothu-53802751-32090368.jpg', label: 'Cultural Heritage', description: 'A glimpse into the traditions and landscapes.' },
    { image: '/backgrounds/mohamed-abdul-rasheed-bb3NDDl2bO0-unsplash.jpg', label: 'Hornbill Festival', description: 'Vibrant celebrations and traditional attire.' },
    { image: '/backgrounds/mohamed-abdul-rasheed-w4N83YXZCII-unsplash.jpg', label: 'Tribal Traditions', description: 'Rich cultural legacy and community.' },
    { image: '/backgrounds/pratham-malviya-Hm59ASJxwJo-unsplash.jpg', label: 'Scenic Mountains', description: 'Breathtaking views of the peaks.' },
    { image: '/backgrounds/rupesh-jaiswal-UpfqeUfatrk-unsplash.jpg', label: 'Local Life', description: 'Everyday moments in Nagaland.' },
    { image: '/backgrounds/tshewe-rhakho-tiLIaC2uQsk-unsplash.jpg', label: 'Serene Nature', description: 'Tranquility among the lush greens.' }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar / Navigation */}
      <nav className="sidebar">
        <div className="logo">
          <i className="fa-solid fa-leaf"></i>
          <span>MindMate</span>
        </div>
        <ul className="nav-links">
          <li className="active"><a href="#"><i className="fa-solid fa-house"></i> <span>Home</span></a></li>
          <li><a href="#"><i className="fa-solid fa-puzzle-piece"></i> <span>Games</span></a></li>
          <li><a href="#"><i className="fa-solid fa-heart-pulse"></i> <span>Health</span></a></li>
          <li><a href="#"><i className="fa-solid fa-utensils"></i> <span>Recipes</span></a></li>
        </ul>
        <div className="nav-bottom">
          <a href="#" className="help-btn"><i className="fa-solid fa-circle-question"></i> <span>Help</span></a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-header">
          <div className="greeting">
            <h1>Good Morning, Sarah!</h1>
            <p id="current-date">{currentDate}</p>
          </div>
          <div className="user-profile">
            <img src="https://ui-avatars.com/api/?name=Sarah&background=D32F2F&color=fff&size=64" alt="User Profile" className="avatar" />
          </div>
        </header>

        <section className="daily-progress-section">
          <div className="progress-card">
            <div className="progress-info">
              <h2>Your Daily Goals</h2>
              <p>You are doing great! Keep it up.</p>
              <div className="progress-stats">
                <span className="highlight">3</span> / 5 Completed
              </div>
            </div>
            <div className="progress-circle-container">
              <svg className="progress-circle" viewBox="0 0 36 36">
                <path className="circle-bg"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray="60, 100"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="circle-text">60%</div>
            </div>
          </div>
        </section>

        <section className="activities-grid">
          <button className="activity-card color-blue">
            <div className="card-icon">
              <i className="fa-solid fa-brain"></i>
            </div>
            <div className="card-content">
              <h3>Brain Games</h3>
              <p>5 min play</p>
            </div>
            <div className="card-action">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>

          <button className="activity-card color-green completed">
            <div className="card-icon image-icon">
              <img src="/REFERENCE for food/ChatGPT Image Sep 24, 2026, 11_19_11 PM.png" alt="Food Recipe" style={{width:'100%', height:'100%', borderRadius:'inherit', objectFit:'cover'}} />
            </div>
            <div className="card-content">
              <h3>Recipe of the Day</h3>
              <p>Traditional meal</p>
            </div>
            <div className="card-action">
              <i className="fa-solid fa-check-circle check-icon"></i>
            </div>
          </button>

          <button className="activity-card color-red">
            <div className="card-icon">
              <i className="fa-solid fa-notes-medical"></i>
            </div>
            <div className="card-content">
              <h3>Health Tips</h3>
              <p>Stay hydrated</p>
            </div>
            <div className="card-action">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>

          <button className="activity-card color-purple">
            <div className="card-icon">
              <i className="fa-solid fa-person-walking"></i>
            </div>
            <div className="card-content">
              <h3>Daily Workout</h3>
              <p>10 min walk</p>
            </div>
            <div className="card-action">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </section>

        <section className="vitals-section">
          <h2>Health Overview</h2>
          <div className="vitals-grid">
            <div className="vital-card">
              <div className="vital-header">
                <h3>Blood Pressure</h3>
                <span className="badge">Normal</span>
              </div>
              <div className="vital-value">
                <span className="number">117</span><span className="unit">/82</span>
              </div>
              <p className="vital-desc">Last checked today at 8:00 AM</p>
            </div>

            <div className="vital-card">
              <div className="vital-header">
                <h3>Mood Today</h3>
              </div>
              <div className="mood-selector">
                <button className="mood-btn" title="Sad"><i className="fa-regular fa-face-frown"></i></button>
                <button className="mood-btn" title="Neutral"><i className="fa-regular fa-face-meh"></i></button>
                <button className="mood-btn active" title="Happy"><i className="fa-regular fa-face-smile"></i></button>
                <button className="mood-btn" title="Great"><i className="fa-regular fa-face-grin-stars"></i></button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="gallery-section">
          <h2>Nagaland Landscapes</h2>
          <AccordionGallery
            items={galleryItems}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
          />
        </section>
        
      </main>
    </div>
  );
}
