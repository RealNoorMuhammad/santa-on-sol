export const CREATOR_ADDRESS =
  "5LAokPTr67hxMzDTEqjKcbc2SY34W7TmTqe9hdyEzNqg"

// Use proxy paths - works in both dev (Vite proxy) and prod (Vercel rewrites)
const FEES_TOTAL_ENDPOINT = (creatorAddress) =>
  `/api/pump-fees/v1/creators/${creatorAddress}/fees/total`

const SOL_PRICE_ENDPOINT = "/api/sol-price/sol-price"

// Fallback values from pump.fun profile (updated Dec 3, 2025)
const FALLBACK_DATA = {
  sol: 61.286,
  usd: 8650,
  lamports: "61286000000",
}

/**
 * Fetches creator rewards (fees) and SOL price, normalizing the result.
 * Returns SOL, lamports and optional USD value.
 */
export async function fetchCreatorRewards(creatorAddress = CREATOR_ADDRESS, signal) {
  try {
    const [feesRes, priceRes] = await Promise.all([
      fetch(FEES_TOTAL_ENDPOINT(creatorAddress), { signal }),
      fetch(SOL_PRICE_ENDPOINT, { signal }).catch(() => null),
    ])

    if (!feesRes.ok) {
      console.warn("Pump.fun API unavailable, using fallback data")
      return FALLBACK_DATA
    }

    const feesJson = await feesRes.json()

    // feesJson has the shape:
    // { totalFees: "59757559006", totalFeesSOL: "59.757559006" }
    const solAmount = Number(
      feesJson?.totalFeesSOL ??
        (feesJson?.totalFees != null ? Number(feesJson.totalFees) / 1_000_000_000 : 0)
    )

    let usdAmount = null

    if (priceRes && priceRes.ok) {
      try {
        const priceJson = await priceRes.json()
        if (solAmount && priceJson?.solPrice) {
          usdAmount = solAmount * Number(priceJson.solPrice)
        }
      } catch {
        // Ignore SOL price parsing errors – SOL + lamports are still shown.
        usdAmount = null
      }
    }

    return {
      sol: solAmount,
      usd: usdAmount,
      lamports: feesJson?.totalFees ?? null,
    }
  } catch (error) {
    if (error.name === "AbortError") {
      throw error
    }
    console.warn("Failed to fetch from Pump.fun API, using fallback:", error.message)
    return FALLBACK_DATA
  }
}


