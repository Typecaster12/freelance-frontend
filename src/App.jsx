// import { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Freelancer from "./components/FreeLancer/Freelancer";
import Hero from "./components/hero/Hero";
import Join from "./components/Join/Join";
import Navbar from "./components/Navbar/Navbar";
import Qa from "./components/QA/Qa";
import Services from "./components/Services/Services";

const App = () => {

  // const [activeComponent, setActiveComponent] = useState('Find Freelancers');

  // const renderComponent = () => {
  //   switch (activeComponent) {
  //     case 'Find Freelancers':
  //       return <Hero />;
  //     case 'About':
  //       return <About />;
  //     case 'Services':
  //       return <Services />;
  //     default:
  //       return <Hero />;
  //   }
  // };

  return (
    <div>
      {/* <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()} */}

      <Navbar />
      <Hero />
      <Services />
      <Join />
      <About />
      <Freelancer />
      <Qa />
      <Footer />
    </div>
  )
}

export default App;

