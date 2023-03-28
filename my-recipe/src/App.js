import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./SignUp";
import { useState } from 'react';
import Signin from "./Signin";
import Recipe from "./Recipe";


function App() {
  const [vis, setVis] = useState(true);
  return (
  <div className="App">

    <BrowserRouter>
      <Routes vis={vis} setVis={setVis}>
        {/* <Route setVis={setVis} path="/signin" element={<Signin />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
