import React, { useState } from 'react';
import Home from './home';
import SetReminder from './setreminder';
import ViewReminders from './viewreminder';
import ChangeReminders from './changereminder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Manage reminders state here
  const [reminders, setReminders] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass reminders and setReminders as props */}
        <Route path="/set-reminder" element={<SetReminder reminders={reminders} setReminders={setReminders} />} />
        <Route path="/view-reminders" element={<ViewReminders reminders={reminders} />} />
        <Route path="/change-reminders" element={<ChangeReminders reminders={reminders} setReminders={setReminders} />} />
      </Routes>
    </Router>
  );
}

export default App;
