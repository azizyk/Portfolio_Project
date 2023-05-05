import logo from './logo.svg';

import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './Components/About';
import Wedding from './Components/Wedding';
import Social_gathering from './Components/Social-gathering';
import Corporate_Events from './Components/Corporate-Events';
import Gallary from './Components/Gallary';
import ContactUs from './Components/Contact-us';

function App() {
  return (
    <BrowserRouter>
       
       
      <div className="App">
      <Navbar />
      <Routes>
         <Route exact path='/About'  element={<About />} /> 
         <Route exact path='/Home'  element={<Hero />} />
         <Route exact path='/Wedding'  element={<Wedding />} />
         <Route exact path='/SocialGathering'  element={<Social_gathering />} />
         <Route exact path='/CorporateEvents'  element={<Corporate_Events />} />
         <Route exact path='/Gallary'  element={<Gallary />} />
         <Route exact path='/Contact'  element={<ContactUs />} />       

      </Routes>
    </div>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
