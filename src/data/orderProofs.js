const orderProofs = [
  {
    id: "order-001",
    label: "Order #1",
    title: "Order #1 · 184 Toys Secured",
    giftCount: 184,
    amountUsd: 2500,
    ageRange: "Ages 0-18",
    description:
      "First Santa community drop — $2.5K converted into 184 toys covering every age group ahead of the hospital deliveries.",
    tweetId: "1995590458060538150",
    tweetUrl: "https://x.com/XbtPika/status/1995590458060538150",
    postedAt: "2025-12-01T20:26:00Z",
    imageUrl: "https://pbs.twimg.com/media/G7HC8aMXcAAyT-7.jpg?format=jpg&name=large",
  },
  {
    id: "order-002",
    label: "Order #2",
    title: "Order #2 · 243 Toys for Ages 0-3",
    giftCount: 243,
    amountUsd: 2649,
    ageRange: "Ages 0-3",
    description:
      "Second bulk purchase focused on infants and toddlers — $2,649 translated into 243 gifts for the youngest elves on the list.",
    tweetId: "1996194041365426188",
    tweetUrl: "https://x.com/XbtPika/status/1996194041365426188",
    postedAt: "2025-12-03T12:25:00Z",
    imageUrl: "https://pbs.twimg.com/media/G7Pn4toWYAEEY2o.jpg?format=jpg&name=large",
  },
  {
    id: "order-003",
    label: "Order #3",
    title: "Order #3 · 165 Toys for Ages 3-6",
    giftCount: 165,
    amountUsd: 2570,
    ageRange: "Ages 3-6",
    description:
      "Fresh delivery for preschoolers — the community provided $2,570 which funded another 165 toys for children ages 3-6.",
    tweetId: "1996244980277387760",
    tweetUrl: "https://x.com/XbtPika/status/1996244980277387760",
    postedAt: "2025-12-03T15:47:00Z",
    imageUrl: "https://pbs.twimg.com/media/G7QWOleWQAANGcx.jpg?format=jpg&name=large",
  },
  {
    id: "order-004",
    label: "Order #4",
    title: "Order #4 · 203 Toys for Older Kids",
    giftCount: 203,
    amountUsd: 2720,
    ageRange: "Older age group",
    description:
      "Another $2,720 drop aimed at the older age group — 203 toys secured to round out the hospital deliveries.",
    tweetId: "1996674916696183075",
    tweetUrl: "https://x.com/XbtPika/status/1996674916696183075",
    postedAt: "2025-12-04T20:16:00Z",
    imageUrl: "https://pbs.twimg.com/media/G7WdQKLXgAAeUeT?format=jpg&name=large",
  },
  {
    id: "order-005",
    label: "Order #5",
    title: "Order #5 · 238 Toys from Creator Rewards",
    giftCount: 238,
    amountUsd: 2896,
    ageRange: "Hospital kids (all ages)",
    description:
      "Creator rewards drop after @souljaboyplz donated 20 SOL directly to the mission — $2,896 converted into 238 toys for kids in need and those spending Christmas in hospitals, pushing totals past 1,250+ gifts and $15.5K donated.",
    tweetId: "1997412708891705449",
    tweetUrl: "https://x.com/robopboc/status/1997412708891705449",
    postedAt: "2025-12-06T21:07:54.590Z",
    imageUrl: "https://pbs.twimg.com/media/G7g8RF2WsAMEvBc?format=jpg&name=large",
  },
]

export const totalGiftCount = orderProofs.reduce(
  (sum, proof) => sum + (proof.giftCount ?? 0),
  0
)

export const totalDonationUsd = orderProofs.reduce(
  (sum, proof) => sum + (proof.amountUsd ?? 0),
  0
)

export const orderCount = orderProofs.length

export default orderProofs

