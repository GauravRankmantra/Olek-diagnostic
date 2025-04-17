import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Layout from "./Layout";
import Home from "./Pages/Home"


const App = () => {


  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          
          
          
       
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget_pass" element={<ForgetPass />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
