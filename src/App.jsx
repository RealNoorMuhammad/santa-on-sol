import React, { useState } from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import LiveStream from "./components/LiveStream"
import Tokenomics from "./components/Tokenomics"
import Lore from "./components/Lore"
import CreatorRewards from "./components/CreatorRewards"
import OrderProofs from "./components/OrderProofs"
import RealSanta from "./components/RealSanta"
import Footer from "./components/Footer"
import SectionSeparator from "./components/SectionSeparator"
import CustomSeparator from "./components/CustomSeparator"
import FlyingSanta from "./components/FlyingSanta"
import Snowfall from "./components/Snowfall"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Snowfall />
          <FlyingSanta />
          <NavBar />
          <CustomSeparator type="top" className="nav-separator" />
        </>
      )}
      <HeroSection />
      <LiveStream />
      <Tokenomics />
      <SectionSeparator />
      <Lore />
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
