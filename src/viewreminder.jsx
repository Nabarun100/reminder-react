import React from 'react';

const ViewReminders = ({ reminders }) => {
  return (
    <div className="container">
      <h2>Your Reminders</h2>
      {reminders.length > 0 ? (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      ) : (
        <p>No reminders available.</p>
      )}
    </div>
  );
};

export default ViewReminders;
