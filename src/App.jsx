import React, { useState, useEffect } from "react"
import { getStoredTheme, setStoredTheme } from "./utils/themeStorage"
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
import ThreeSnowfall from "./components/ThreeSnowfall"
import SnowWhiteSeparator from "./components/SnowWhiteSeparator"
import LoadingScreen from "./components/LoadingScreen"
import GlacierTransition from "./components/GlacierTransition"

function App() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle actual DOM updates for theme
  useEffect(() => {
    // If transitioning to Snow White, wait for animation coverage
    if (isTransitioning && theme === "snow-white") {
      // We'll update the DOM in the middle of the animation via timeout or just let it happen?
      // Actually, for the wipe effect: 
      // 1. Trigger wipe (Night visible)
      // 2. Wipe covers screen.
      // 3. Switch DOM to White (hidden behind wipe).
      // 4. Wipe fades out (revealing White).
      
      // Current flow: User clicks toggle -> setTheme('snow-white') -> App re-renders.
      // We need to delay the visual DOM class switch?
      // Or we rely on the overlay covering it fast enough?
      // Let's update the class immediately but the overlay hides the "instant" pop.
    }

    setStoredTheme(theme)
    const root = document.documentElement
    const body = document.body
    
    // If switching TO snow white, we might want to delay the class application?
    // But if we use GSAP wipe, we can just apply it. The wipe covers the transition.
    
    root.classList.remove("theme-night", "theme-snow-white")
    body.classList.remove("theme-night", "theme-snow-white")

    const nextThemeClass = theme === "snow-white" ? "theme-snow-white" : "theme-night"
    root.classList.add(nextThemeClass)
    body.classList.add(nextThemeClass)
  }, [theme, isTransitioning]) // Add isTransitioning dependency?

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleThemeToggle = () => {
    const nextTheme = theme === "snow-white" ? "night" : "snow-white"
    
    if (nextTheme === "snow-white") {
      // Start transition, delay theme switch until covered
      setIsTransitioning(true)
    } else {
      // Instant switch back to night
      setTheme(nextTheme)
    }
  }

  const onTransitionCovered = () => {
    setTheme("snow-white")
  }

  const onTransitionComplete = () => {
    setIsTransitioning(false)
  }

  return (
    <div className={`app theme-${theme}`}>
      <GlacierTransition 
        isActive={isTransitioning} 
        onCovered={onTransitionCovered}
        onComplete={onTransitionComplete} 
      />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} isSnowWhiteTheme={theme === "snow-white"} />}
      {!isLoading && (
        <>
          {/* Use ThreeSnowfall for a premium feel, passing the theme */}
          {theme !== "snow-white" && <ThreeSnowfall theme={theme} />}
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
