import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./routes/About";
import Employment from "./routes/Employment";
import Home from "./routes/Home";
import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Alert />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
