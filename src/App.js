import Header from './components/header/header';
import Hero from './components/hero/hero'
import About from './components/aboutSection/aboutSection';
import Services from './components/servicesSection/servicesSection';
import Testimonials from './components/testimonials/testimonials';
import Projects from './components/projectsSections/projectsSections';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Header />

      <Hero />

      <About />

      <Services />

      <Testimonials />

      <Projects />

      <Footer />
    </main>
  );
}

export default App;
