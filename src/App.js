import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Service_card from './components/Service_cards';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
      <Service_card/>
    </div>
  );
}

export default App;
