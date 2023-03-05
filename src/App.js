import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ServicesPage from "./components/Services";
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact'
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:num" element={<Blogs />}/>
        <Route path="*" element={
                                  <div
                                      style={{height:'80vh', display:'flex', alignItems:'center', justifyContent:'center', color:'red'}}
                                  >
                                    <h1>Page not found 404!!</h1>
                                  </div>
                                  
                                } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
