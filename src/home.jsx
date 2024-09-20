import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Reminder App</h1>
      <Link to="/set-reminder" className="button">Set New Reminder</Link>
      <Link to="/view-reminders" className="button">View Reminders</Link>
      <Link to="/change-reminders" className="button">Change Reminders</Link>
    </div>
  );
};

export default Home;
