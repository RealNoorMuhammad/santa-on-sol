import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import LiveStream from "./components/LiveStream"
import Tokenomics from "./components/Tokenomics"
import Lore from "./components/Lore"
import CreatorRewards from "./components/CreatorRewards"
import OrderProofs from "./components/OrderProofs"
import RealSanta from "./components/RealSanta"
import FeedThePeople from "./components/FeedThePeople"
import Footer from "./components/Footer"
import SectionSeparator from "./components/SectionSeparator"
import CustomSeparator from "./components/CustomSeparator"
import SantaSeparator from "./components/SantaSeparator"
import FlyingSanta from "./components/FlyingSanta"
import Snowfall from "./components/Snowfall"
import SnowWhiteSeparator from "./components/SnowWhiteSeparator"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState("night")

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.remove("theme-night", "theme-snow-white")
    body.classList.remove("theme-night", "theme-snow-white")

    const nextThemeClass = theme === "snow-white" ? "theme-snow-white" : "theme-night"
    root.classList.add(nextThemeClass)
    body.classList.add(nextThemeClass)
  }, [theme])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "snow-white" ? "night" : "snow-white"))
  }

  return (
    <div className={`app theme-${theme}`}>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Snowfall />
          <FlyingSanta />
          <NavBar
            isSnowWhiteTheme={theme === "snow-white"}
            onToggleTheme={handleThemeToggle}
          />
          <CustomSeparator type="top" className="nav-separator" />
        </>
      )}
      <HeroSection isSnowWhiteTheme={theme === "snow-white"} />
      {theme === "snow-white" && <SnowWhiteSeparator />}
      <LiveStream />
      <Tokenomics />
      <SantaSeparator />
      <Lore />
      {theme !== "snow-white" && (
        <CustomSeparator type="bottom" className="nav-separator" />
      )}
      <CreatorRewards />

      <OrderProofs />

      <FeedThePeople />
      {theme !== "snow-white" && (
        <CustomSeparator type="top" className="nav-separator" />
      )}

      <RealSanta />
      <Footer />
    </div>
  )
}

export default App
