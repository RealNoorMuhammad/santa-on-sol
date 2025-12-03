import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Tokenomics from "./components/Tokenomics"
import Roadmap from "./components/Roadmap"
import CreatorRewards from "./components/CreatorRewards"
import OrderProofs from "./components/OrderProofs"
import RealSanta from "./components/RealSanta"
import Footer from "./components/Footer"
import SectionSeparator from "./components/SectionSeparator"
import CustomSeparator from "./components/CustomSeparator"
import FlyingSanta from "./components/FlyingSanta"
import Snowfall from "./components/Snowfall"

function App() {

  return (
    <div>
      <Snowfall />
      <FlyingSanta />
      <NavBar />
      <CustomSeparator type="top" className="nav-separator" />
      <HeroSection />
  
      <Tokenomics />
      <SectionSeparator />
      <Roadmap />
       <CustomSeparator type="bottom" className="nav-separator" />
      <CreatorRewards />
 
      <OrderProofs />
  <CustomSeparator type="top" className="nav-separator" />
      <RealSanta />
      <Footer />
    </div>
  )
}

export default App
