import { DiVim } from "react-icons/di";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={
                    <div>
                        <Navbar/>
                        <Home />
                        <Footer/>
                    </div>
                }/>

                
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}
export default App;