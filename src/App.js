import './App.css';
import CTA from './components/cta';
import Footer from './components/footer';
import Header from './components/header';
import Price from './components/price';
import Testimonials from './components/testimonials';

function App() {
  return (
    <>
      <Header/>
      <Testimonials/>
      <Price/>
      <CTA/>
     <Footer/>
     </>
  );
}

export default App;
