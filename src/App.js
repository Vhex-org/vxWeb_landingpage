import Header from './components/Header';
import CarouselEquipe from './components/CarouselEquipe';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-content">
        <Intro/>
        <CarouselEquipe/>
      </div>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
