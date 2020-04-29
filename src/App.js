import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroductionComponent from './introduction/introductionComponent'
import AboutMeComponent from './aboutMe/aboutmeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsComponent from './project/projectComponent';
import ContactComponent from './contact/contactComponent';
import SkillsComponent from './skills/skillsComponent';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <IntroductionComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
