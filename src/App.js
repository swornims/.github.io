import './App.css';
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Language } from './components/Language'
import { Projects } from './components/Projects'
// import { Experience } from './components/Experience'

function App() {
  return (
    <>
      <Homepage />
      <About />
      <Language />
      <Projects />
    </>
  );
}

export default App;
