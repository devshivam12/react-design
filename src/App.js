import './App.css';
import Home from './component/Home'
import Program from './component/program'
import WhyChoseUs from './component/WhyChoosUs'
import Plans from './component/Plans'
import Testimonial from './component/Testimonials'
import Join from './component/join'
import Footer from './component/Footer'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/Home.scss'
import './style/Header.scss'
import './style/program.scss'
import './style/WhyChoosUs.scss'
import './style/Plans.scss'
import './style/Testimonial.scss'
import './style/Join.scss'
import './style/Footer.scss'

function App() {
  return (
    <div className="App">


      <Home />
      <Program />
      <WhyChoseUs />
      < Plans/>
      <Testimonial/>
      <Join/>
      <Footer />
    </div>
  );
}

export default App;
