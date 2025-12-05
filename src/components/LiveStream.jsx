import React, { useEffect, useState } from "react"
import "./LiveStream.css"
import candyCaneBorder from "../assets/images/candy-cane-border.png"
import santaRunning from "../assets/images/santa-running.gif"

const LiveStream = () => {
  const STREAM_EMBED_URL =
    "https://www.youtube.com/embed/Cp4RRAEgpeU?si=nRA-q_sDJ9OFS0C2"
  const STREAM_WATCH_URL =
    "https://www.youtube.com/live/Cp4RRAEgpeU?si=nRA-q_sDJ9OFS0C2"

  const [streamReady, setStreamReady] = useState(false)
  const [streamFailed, setStreamFailed] = useState(false)

  // Fail-safe: if the iframe doesn’t become ready in time, reveal the fallback.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!streamReady) {
        setStreamFailed(true)
      }
    }, 7000)
    return () => clearTimeout(timer)
  }, [streamReady])

  const handleRetry = () => {
    setStreamFailed(false)
    setStreamReady(false)
  }

  return (
    <section className="livestream-section" id="livestream">
      <div className="bg-snow"></div>
      
      {/* Floating decorations */}
      <div className="floating-ornament ornament-1">🎄</div>
      <div className="floating-ornament ornament-2">⭐</div>
      <div className="floating-ornament ornament-3">🎁</div>
      <div className="floating-ornament ornament-4">❄️</div>
      
      <div className="livestream-container relative-content">
        <div className="livestream-header">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE FROM LAPLAND
          </div>
          <h2 className="livestream-title">Santa Stream</h2>
          <p className="livestream-subtitle">
            If the embed doesn’t start, open it on YouTube or try again below.
          </p>
        </div>
        
        <div className="video-frame-wrapper">
          {/* Candy cane border frame */}
          <div className="candy-cane-frame">
            <img src={candyCaneBorder} alt="" className="candy-border-img" />
            <div className="video-container">
              {!streamFailed && (
                <iframe
                  key={STREAM_EMBED_URL}
                  src={STREAM_EMBED_URL}
                  title="Santa's Workshop Livestream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  onLoad={() => setStreamReady(true)}
                  onError={() => setStreamFailed(true)}
                ></iframe>
              )}

              {streamFailed && (
                <div className="stream-fallback">
                  <img src={santaRunning} alt="Santa running with presents" />
                  <div className="stream-fallback__copy">
                    <h3>Stream looks offline</h3>
                    <p>
                      We’ll be back shortly. In the meantime you can open the feed in
                      YouTube or try reloading the embed.
                    </p>
                    <div className="stream-fallback__actions">
                      <a
                        href={STREAM_WATCH_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="stream-btn stream-btn--primary"
                      >
                        Open on YouTube
                      </a>
                      <button
                        type="button"
                        className="stream-btn stream-btn--ghost"
                        onClick={handleRetry}
                      >
                        Retry Embed
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="corner-decoration top-left">🔔</div>
          <div className="corner-decoration top-right">🔔</div>
          <div className="corner-decoration bottom-left">🎀</div>
          <div className="corner-decoration bottom-right">🎀</div>
        </div>
        
        <div className="stream-info">
          <a
            className="info-card"
            href={STREAM_WATCH_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Santa stream on YouTube"
          >
            <span className="info-icon">▶️</span>
            <span className="info-text">Open stream in YouTube</span>
          </a>
          <button
            type="button"
            className="info-card info-card--ghost"
            onClick={handleRetry}
          >
            <span className="info-icon">🔄</span>
            <span className="info-text">Reload embed</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveStream

