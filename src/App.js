import './App.css';
import Space from './space.js'; // Import the Space component
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  return (
    <>
      <div id="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="content-container"></div>
      <Space /> {/* Mouse trail animation */}
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
