import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import Service from './components/serivces';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Service />

      <Newsletter />

      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
};

export default Landing;
