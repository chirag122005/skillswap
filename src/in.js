import ReactDOM from "react-dom/client";
import Home from "../Components/Home";
import SecondaryHome from "../Components/SecondaryHome";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </Router>
//   );
// }


function App() {
    return (
        <Router>
            <Routes>


                <Route path="/" element={<Home/>} />
                <Route path="/SecondaryHome" element={<SecondaryHome></SecondaryHome>}></Route>


            </Routes>

           
   
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);







