import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Menu />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
