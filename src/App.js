import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UnitPage from "./unitPage";

import Unit1 from "./unit1";
import unit2 from "./unit2";
import unit3 from "./unit3";
import unit4 from "./unit4";
import unit5 from "./unit5";
// import unit1 from "./unit1";
// import unit1 from "./unit1";
// import unit1 from "./unit1";
// import unit1 from "./unit1";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Unit2 from "./unit2";
import Unit3 from "./unit3";
import Unit4 from "./unit4";
import Unit5 from "./unit5";
import Unit6 from "./unit6";
import Unit7 from "./unit7";
import Unit8 from "./unit8";
import Unit9 from "./unit9";
import Unit10 from "./unit10";

function App() {
   return (
      <Router>
         <div className="container">
            <div className="App">
               <Header />

               <Routes>
                  <Route path="/" element={<HomePage />} />
                  {/* <Route path="/unit/:id" element={<UnitPage />} /> */}
                  <Route path="/unit/1" element={<Unit1 />} />
                  <Route path="/unit/2" element={<Unit2 />} />
                  <Route path="/unit/3" element={<Unit3 />} />
                  <Route path="/unit/4" element={<Unit4 />} />
                  <Route path="/unit/5" element={<Unit5 />} />
                  <Route path="/unit/6" element={<Unit6 />} />
                  <Route path="/unit/7" element={<Unit7 />} />
                  <Route path="/unit/8" element={<Unit8 />} />
                  <Route path="/unit/9" element={<Unit9 />} />
                  <Route path="/unit/10" element={<Unit10 />} />
               </Routes>
               <Footer />
            </div>
         </div>
      </Router>
   );
}

export default App;
