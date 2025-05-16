// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HireUs from "./pages/HireUs";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import ShoppableVideos from "./pages/Shoppablevideos";
import Interactivevideos from "./pages/Interactivevideos";
import Livestreaming from "./pages/Livestreaming";
import Liveshopping from "./pages/Liveshopping";
import Liveedutainment from "./pages/Liveedutainment";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hireus" element={<HireUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="features" element={<Features />} />
        <Route path="/products/interactive-videos" element={<ShoppableVideos />} />
        <Route path="/products/interactive-branching" element={<Interactivevideos />} />
        <Route path="/products/live-streaming" element={<Livestreaming />} />
        <Route path="/products/live-shopping" element={<Liveshopping />} />
        <Route path="/products/live-edutainment" element={<Liveedutainment />} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;