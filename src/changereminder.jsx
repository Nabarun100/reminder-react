import React, { useState } from 'react';

const ChangeReminders = ({ reminders, setReminders }) => {
  const [selectedReminder, setSelectedReminder] = useState('');
  const [newReminder, setNewReminder] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUpdateReminder = () => {
    if (!selectedReminder || !newReminder) {
      setFeedback('Please select a reminder and enter a new reminder.');
      return;
    }

    // Update the selected reminder with the new one
    const updatedReminders = reminders.map(reminder =>
      reminder === selectedReminder ? newReminder : reminder
    );
    setReminders(updatedReminders);
    setFeedback('Reminder updated successfully.');
  };

  return (
    <div className="container">
      <h2>Change Reminder</h2>
      <select onChange={(e) => setSelectedReminder(e.target.value)} value={selectedReminder}>
        <option value="">Select Reminder</option>
        {reminders.map((reminder, index) => (
          <option key={index} value={reminder}>{reminder}</option>
        ))}
      </select>
      <input
        type="text"
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
        placeholder="Enter new reminder"
      />
      <button onClick={handleUpdateReminder}>Update Reminder</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default ChangeReminders;
