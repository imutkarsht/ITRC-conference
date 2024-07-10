import React from 'react';
import Homepage from './components/Homepage';
import SubmissionPage from './components/Submission';
import Navbar from './components/Navbar';
import Comittee from './components/Comittee';
import Registration from './components/Registration';
import CallForPaper from './components/CallForPaper';
import ConferenceTheme from './components/ConferenceTheme';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <SubmissionPage />
      <Comittee />
      <Registration />
      <CallForPaper />
      <ConferenceTheme />
      <ContactUs />
    </div>
  );
}

export default App;
