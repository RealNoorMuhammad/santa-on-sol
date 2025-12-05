import React, { useEffect, useMemo, useState } from "react"
import orderProofs, {
  orderCount,
  totalDonationUsd,
  totalGiftCount,
} from "../data/orderProofs"
import "./OrderProofs.css"

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

const numberFormatter = new Intl.NumberFormat("en-US")

const formatDate = (value) => {
  if (!value) return ""
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const OrderProofs = () => {
  const [selectedProof, setSelectedProof] = useState(null)

  const modalTweetEmbedUrl = useMemo(() => {
    if (!selectedProof?.tweetId) return null
    return `https://platform.twitter.com/embed/Tweet.html?id=${selectedProof.tweetId}&theme=dark`
  }, [selectedProof])

  useEffect(() => {
    if (typeof window === "undefined" || !selectedProof) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProof(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    const { style } = document.documentElement
    const previousOverflow = style.overflow
    style.overflow = "hidden"
    
    // Hide navbar when modal is open to prevent overlap/distraction
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      navbar.style.display = 'none'
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      style.overflow = previousOverflow
      
      // Restore navbar
      if (navbar) {
        navbar.style.display = ''
      }
    }
  }, [selectedProof])

  const closeModal = () => setSelectedProof(null)

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  const summaryCopy = {
    gifts: numberFormatter.format(totalGiftCount),
    usd: currencyFormatter.format(totalDonationUsd),
    orders: `${orderCount} verified ${orderCount === 1 ? "order" : "orders"}`,
  }

  return (
    <section className="order-proofs" id="order-proofs">
      <div className="order-proofs__container">
        <div className="order-proofs__intro">
          <p className="order-proofs__eyebrow">Verified Deliveries</p>
          <h2>Gift Orders & Proof of Payment</h2>
          <p>
            Every order below is backed by an on-chain community donation and a public
            proof dropped in the Santa thread. Tap any card to open the original tweet
            (or view the embedded receipt) and double-check the totals yourself.
          </p>
        </div>

        <div className="order-proofs__stats-grid">
          <div className="order-proofs__stat-card">
            <span className="order-proofs__stat-label">Gifts donated</span>
            <div className="order-proofs__stat-value order-proofs__stat-value--stacked">
              <div>
                {summaryCopy.gifts}
                <span>toys</span>
              </div>
              <div className="order-proofs__stat-subtitle">Creator Rewards Tracker</div>
            </div>
            <small>Across all fulfilled orders</small>
          </div>

          <div className="order-proofs__stat-card">
            <span className="order-proofs__stat-label">Community funded</span>
            <p className="order-proofs__stat-value">
              {summaryCopy.usd}
            </p>
            <small>USD equivalent processed via crypto card</small>
          </div>

          <div className="order-proofs__stat-card order-proofs__stat-card--alt">
            <span className="order-proofs__stat-label">Orders completed</span>
            <p className="order-proofs__stat-value">{summaryCopy.orders}</p>
            <small>More proofs will appear here as they drop</small>
          </div>
        </div>

        <div className="order-proofs__grid">
          {orderProofs.map((proof) => (
            <article key={proof.id} className="order-proofs__card">
              <div className="order-proofs__card-header">
                <span className="order-proofs__pill">{proof.label}</span>
                {proof.giftCount != null ? (
                  <span className="order-proofs__gift-count">
                    {numberFormatter.format(proof.giftCount)} toys
                  </span>
                ) : (
                  <span className="order-proofs__gift-count order-proofs__gift-count--muted">
                    Gift count pending
                  </span>
                )}
              </div>

              {proof.imageUrl && (
                <div className="order-proofs__image-wrapper">
                  <img
                    src={proof.imageUrl}
                    alt={`Receipt preview for ${proof.title}`}
                    loading="lazy"
                  />
                </div>
              )}

              <h3>{proof.title}</h3>
              <p className="order-proofs__description">{proof.description}</p>

              <dl className="order-proofs__meta">
                <div>
                  <dt>Donation</dt>
                  <dd>
                    {proof.amountUsd != null
                      ? currencyFormatter.format(proof.amountUsd)
                      : "—"}
                  </dd>
                </div>
                <div>
                  <dt>Age focus</dt>
                  <dd>{proof.ageRange ?? "All ages"}</dd>
                </div>
                <div>
                  <dt>Posted</dt>
                  <dd>{formatDate(proof.postedAt)}</dd>
                </div>
              </dl>

              <div className="order-proofs__actions">
                <button
                  type="button"
                  className="order-proofs__btn order-proofs__btn--primary"
                  onClick={() => setSelectedProof(proof)}
                >
                  View Proof
                </button>
                <a
                  href={proof.tweetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="order-proofs__btn order-proofs__btn--ghost"
                >
                  Open on X
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProof && (
        <div
          className="order-proofs__modal-overlay"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            className="order-proofs__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`order-proof-${selectedProof.id}`}
          >
            <button
              type="button"
              className="order-proofs__modal-close"
              aria-label="Close proof viewer"
              onClick={closeModal}
            >
              ×
            </button>
            <span className="order-proofs__pill">{selectedProof.label}</span>
            <h3 id={`order-proof-${selectedProof.id}`}>{selectedProof.title}</h3>
            <p className="order-proofs__description">{selectedProof.description}</p>

            {modalTweetEmbedUrl ? (
              <iframe
                key={selectedProof.tweetId}
                src={modalTweetEmbedUrl}
                title={`${selectedProof.label} tweet proof`}
                loading="lazy"
                frameBorder="0"
                allow="fullscreen; clipboard-write"
              />
            ) : (
              <div className="order-proofs__modal-fallback">
                <p>Proof embed coming soon. Use the X link below in the meantime.</p>
                {selectedProof.imageUrl && (
                  <img
                    src={selectedProof.imageUrl}
                    alt={`Receipt preview for ${selectedProof.title}`}
                    loading="lazy"
                  />
                )}
              </div>
            )}

            <div className="order-proofs__modal-links">
              <a href={selectedProof.tweetUrl} target="_blank" rel="noreferrer">
                Open tweet in new tab
              </a>
              <button
                type="button"
                className="order-proofs__btn order-proofs__btn--ghost"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default OrderProofs

