import { useEffect, useRef, useState } from "react"
import { CREATOR_ADDRESS, fetchCreatorRewards } from "../utils/pumpfun"

const REFRESH_INTERVAL = 30_000

export function useCreatorRewards() {
  const [rewardData, setRewardData] = useState({
    sol: null,
    usd: null,
    lamports: null,
  })
  const [loading, setLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const hasDataRef = useRef(false)
  const fetchRewardsRef = useRef(null)

  useEffect(() => {
    let currentController = null
    let isMounted = true

    const fetchRewards = async () => {
      if (currentController) {
        currentController.abort()
      }

      currentController = new AbortController()
      const { signal } = currentController

      setIsRefreshing(true)
      setError(null)

      try {
        const data = await fetchCreatorRewards(CREATOR_ADDRESS, signal)

        if (!isMounted) {
          return
        }

        setRewardData(data)
        setLastUpdated(new Date())
        setLoading(false)
        setError(null)
        hasDataRef.current = true
      } catch (fetchError) {
        if (fetchError.name === "AbortError" || !isMounted) {
          return
        }

        const hasData = hasDataRef.current

        setError(
          hasData
            ? "Unable to refresh live rewards. Showing last known values."
            : "Unable to load live rewards. Please try again."
        )
        setLoading(false)
      } finally {
        if (isMounted) {
          setIsRefreshing(false)
        }
      }
    }

    fetchRewardsRef.current = fetchRewards
    fetchRewards()
    const intervalId = setInterval(fetchRewards, REFRESH_INTERVAL)

    return () => {
      isMounted = false
      if (currentController) {
        currentController.abort()
      }
      clearInterval(intervalId)
    }
  }, [])

  const refresh = () => {
    if (fetchRewardsRef.current) {
      fetchRewardsRef.current()
    }
  }

  return {
    rewardData,
    loading,
    isRefreshing,
    error,
    lastUpdated,
    refresh,
  }
}


