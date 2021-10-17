import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-content">
        <LandingPage/>
      </div>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
