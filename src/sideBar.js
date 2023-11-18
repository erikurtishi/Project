// Sidebar.js
import React from 'react';
import './sideBar.css'; // Import the external CSS file

const Sidebar = () => {
  // Replace 'your-picture-url.jpg' with the actual URL of the picture
  const profilePictureUrl = require('./images/aliprofile.jpg');
  const userName = 'John Doe'; // Replace with the actual name
  const userId = '@john_doe_123'; // Replace with the actual user ID

  return (
    <div className="sidebar">
      {/* Profile section */}
      <div className="profile-section">
        <div className="profile-picture">
          <img src={profilePictureUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          <h3>{userName}</h3>
          <p>{userId}</p>
        </div>
      </div>

      {/* News section */}
      <div className="news-section">
        <h2>News</h2>
        {/* Add your news content here */}
        <p>Latest news: Something interesting happened!</p>
      </div>
    </div>
  );
};

export default Sidebar;
