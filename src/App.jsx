import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./routes/About";
import Policies from "./routes/Policies";
import Organization from "./routes/Organization";
import Sponsors from "./routes/Sponsors";
import Employment from "./routes/Employment";
import Home from "./routes/Home";
import Alert from "./components/Alert/Alert";
import Services from "./routes/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Alert />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="employment" element={<Employment />} />
            <Route path="policies" element={<Policies />} />
            <Route path="organization" element={<Organization />} />
            <Route path="sponsors" element={<Sponsors />} />
          </Route>
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
