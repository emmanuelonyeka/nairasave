import { USD_TO_NGN } from '../data'

/**
 * Generates a 12-month savings projection.
 * @param {number} monthlyUSD - Monthly savings in USD
 * @returns {Array} Array of 12 month objects
 */
export function generateProjection(monthlyUSD) {
  if (!monthlyUSD || isNaN(monthlyUSD) || monthlyUSD <= 0) return []

  return Array.from({ length: 12 }, (_, i) => {
    const month = i + 1
    const totalUSD = parseFloat((monthlyUSD * month).toFixed(2))
    const totalNGN = totalUSD * USD_TO_NGN
    return { month, totalUSD, totalNGN }
  })
}

/**
 * Format number as NGN currency string
 */
export function formatNGN(value) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format number as USD currency string
 */
export function formatUSD(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Generates a contextual insight message based on monthly savings
 */
export function generateInsight(monthlyUSD) {
  if (!monthlyUSD || monthlyUSD <= 0) return null

  const total12USD = monthlyUSD * 12
  const total12NGN = total12USD * USD_TO_NGN
  const formattedNGN = formatNGN(total12NGN)
  const formattedUSD = formatUSD(total12USD)

  if (monthlyUSD < 50) {
    return `Starting small is still starting. Saving ${formatUSD(monthlyUSD)}/month adds up to ${formattedNGN} in a year — more than most people save in three.`
  } else if (monthlyUSD < 200) {
    return `At ${formatUSD(monthlyUSD)}/month, you'd hold ${formattedUSD} in USD savings by month 12 — worth ${formattedNGN} at today's parallel rate.`
  } else if (monthlyUSD < 1000) {
    return `Consistent savers at ${formatUSD(monthlyUSD)}/month build ${formattedNGN} in Naira value over 12 months. That's real, tangible wealth.`
  } else {
    return `At ${formatUSD(monthlyUSD)}/month, your 12-month USD balance of ${formattedUSD} translates to ${formattedNGN}. You're building serious financial resilience.`
  }
}

/**
 * Clamp a value to a safe range for chart rendering
 */
export function getBarHeightPercent(value, maxValue) {
  if (!maxValue || maxValue === 0) return 0
  return Math.min((value / maxValue) * 100, 100)
}
