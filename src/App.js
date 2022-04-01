import React from "react";
import MainNav from "./components/navbar/MainNav";
import Hero from "./components/hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Facilities from "./components/facilities/Facilities";
import Listing from "./components/listing/Listing";
import Banner from "./components/banner/Banner";
import WelcomeDirectzone from "./components/welcome/WelcomeDirectzone";
import Testimonials from "./components/testimonials/Testimonials";
import Workings from "./components/howitsworks/Workings";
import Footer from "./components/footer/Footer";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Blog from "./pages/Blog";
import "./app.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <MainNav />
              <Hero />
              <Facilities />
              <Listing />
              <Banner />
              <WelcomeDirectzone />
              <Testimonials />
              <Workings />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/about"
          element={
            <>
              <MainNav /> <About />
            </>
          }
        ></Route>
        <Route
          exact
          path="/contact"
          element={
            <>
              <MainNav />
              <Contact />
            </>
          }
        ></Route>
        <Route
          exact
          path="/blog"
          element={
            <>
              <MainNav />
              <Blog />
            </>
          }
        ></Route>
        <Route
          exact
          path="/listing"
          element={
            <>
              <MainNav />
              <Listings />
            </>
          }
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
