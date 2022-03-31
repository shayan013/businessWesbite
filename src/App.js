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
import "./app.css";
function App() {
  return (
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
  );
}

export default App;
