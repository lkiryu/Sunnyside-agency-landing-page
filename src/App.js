import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero'
import About from './components/aboutSection/aboutSection';
import Services from './components/servicesSection/servicesSection';
import Testimonials from './components/testimonials/testimonials';

function App() {
  return (
    <main className='container'>
      <Header />

      <Hero />

      <About />

      <Services />

      <Testimonials />
    </main>
  );
}

export default App;
