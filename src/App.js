import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterTwo from "./components/footer/FooterTwo";
import MainFooter from "./components/footer/MainFooter";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import EliteVibes from "./pages/eliteVibes/EliteVibes";
import Home from "./pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import NotFound from "./pages/404/NotFound";

function App() {
  const [top, setTop] = useState(false);

  function gotTop() {
    setTop(window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* Home Route */}
            <Route index element={<Home />} />

            {/* Elite Vibes Route */}
            <Route path="elitevibes">
              <Route index element={<EliteVibes />} />
            </Route>

            {/* About Page Route */}
            <Route path="aboutUs" element={<About />} />

            {/* Contact Page Route */}
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <MainFooter />
        <FooterTwo />
        <button
          className={`fixed bottom-10 right-10 text-white z-20 border h-10 w-10 rounded-full inline-block items-center justify-center focus:outline-none active:scale-95`}
          onClick={() => setTop(gotTop)}>
          ↑
        </button>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
