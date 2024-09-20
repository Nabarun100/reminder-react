import React, { useState } from 'react';

const SetReminder = ({ reminders, setReminders }) => {
  const [reminder, setReminder] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSetReminder = () => {
    if (!reminder) {
      setFeedback('Please enter a reminder.');
      return;
    }

    // Add the new reminder to the list and update state in App
    setReminders([...reminders, reminder]);

    // Clear input and provide feedback
    setReminder('');
    setFeedback('Reminder saved successfully.');
  };

  return (
    <div className="container">
      <h2>Set New Reminder</h2>
      <input
        type="text"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        placeholder="Enter reminder"
      />
      <button onClick={handleSetReminder}>Save Reminder</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default SetReminder;
