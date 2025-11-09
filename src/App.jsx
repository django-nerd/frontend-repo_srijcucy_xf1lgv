import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutPricing from './components/AboutPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] font-sans">
      <Header />
      <main>
        <Hero />
        <AboutPricing />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
