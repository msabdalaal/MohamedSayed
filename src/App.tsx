import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/MohamedSayed/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/MohamedSayed/projects/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
