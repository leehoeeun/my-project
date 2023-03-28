import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./SignUp";
import { useState } from 'react';


function App() {
  const [vis, setVis] = useState(true);
  return (
  <div className="App">

    <BrowserRouter>
      <Routes vis={vis} setVis={setVis}>
        {/* <Route setVis={setVis} path="/signin" element={<Signin />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
