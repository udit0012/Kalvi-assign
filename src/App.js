import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
