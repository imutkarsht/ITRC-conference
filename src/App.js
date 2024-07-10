import React from 'react';
import Homepage from './components/home-page/Homepage';
import SubmissionPage from './components/submission/Submission';
import Navbar from './components/navbar/Navbar';
import Comittee from './components/committee/Comittee';
import Registration from './components/registration/Registration';
import CallForPaper from './components/call-for-paper/CallForPaper';
import ConferenceTheme from './components/conf-theme/ConferenceTheme';
import ContactUs from './components/footer/ContactUs';
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Comittee />
      <SubmissionPage />
      <Registration />
      <CallForPaper />
      <ConferenceTheme />
      <ContactUs />
    </div>
  );
}

export default App;
