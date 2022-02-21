import './App.css';
import Rectangle90 from './components/Rectangle90';
import Rectangle91 from './components/Rectangle91';
import About from './components/About';
import Interests from './components/Interests';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="card-container">
      <Rectangle90 />
      <Rectangle91 />
      <About />
      <Interests />
      <SocialIcons /> 

    </div>
  );
}

export default App;
