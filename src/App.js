import './App.css';

import Home from './Pages/Home/Home.js';
import Sign_in from './Pages/Sign_in/Sign_in.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>


<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Sign_in/>}/>
    {/* <Route path="/posts/content" element={<Post2/>}/>
    <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
