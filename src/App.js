import { Route , Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

  const [signedup , setsignedup] = useState(false);

  return (
    <div className="flex flex-col  w-screen h-screen bg-richblack-900">
        <Navbar signedup = {signedup} setsignedup={setsignedup} />


      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login setsignedup={setsignedup}/>}/>
            <Route path="/Signup" element={<Signup setsignedup={setsignedup}/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            
      </Routes>

    </div>
);
}

export default App;
