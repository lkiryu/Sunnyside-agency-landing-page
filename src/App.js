import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero'
import About from './components/aboutSection/aboutSection'

function App() {
  return (
    <main className='container'>
      <Header />

      <Hero />

      <About />
    </main>
  );
}

export default App;
