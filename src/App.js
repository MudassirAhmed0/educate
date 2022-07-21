import "./App.css";
import Login from "./components/authentication/Login";
import Home from "./pages/home";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import CreateClassroom from "./pages/create-classroom";
import JoinClass from "./pages/join-class";
import AboutYou from "./pages/about-you";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <CreateClassroom /> */}
      {/* <JoinClass /> */}
      {/* <AboutYou /> */}
    </>
  );
}

export default App;
