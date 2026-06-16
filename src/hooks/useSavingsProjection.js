import { useState, useMemo, useCallback } from 'react'
import { generateProjection, generateInsight } from '../utils/projection'

export function useSavingsProjection() {
  const [rawInput, setRawInput] = useState('')
  const [activeMonth, setActiveMonth] = useState(null)

  const monthlyAmount = useMemo(() => {
    const parsed = parseFloat(rawInput)
    if (!rawInput || isNaN(parsed) || parsed <= 0) return 0
    return parsed
  }, [rawInput])

  const isValid = monthlyAmount > 0
  const isTooBig = monthlyAmount > 1_000_000

  const projection = useMemo(() => {
    if (!isValid) return []
    return generateProjection(monthlyAmount)
  }, [monthlyAmount, isValid])

  const insight = useMemo(() => {
    if (!isValid) return null
    return generateInsight(monthlyAmount)
  }, [monthlyAmount, isValid])

  const summary = useMemo(() => {
    if (!isValid || projection.length === 0) return null
    const last = projection[projection.length - 1]
    return {
      monthly: monthlyAmount,
      totalUSD: last.totalUSD,
      totalNGN: last.totalNGN,
    }
  }, [projection, monthlyAmount, isValid])

  const handleInput = useCallback((e) => {
    const val = e.target.value
    // Allow digits and a single decimal point, max 2 decimal places
    if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
      setRawInput(val)
    }
  }, [])

  const getErrorMessage = () => {
    if (rawInput === '') return null
    const parsed = parseFloat(rawInput)
    if (isNaN(parsed)) return 'Please enter a valid number.'
    if (parsed < 0) return 'Amount cannot be negative.'
    if (parsed === 0) return 'Enter an amount greater than $0 to see your projection.'
    if (isTooBig) return 'Please enter an amount under $1,000,000.'
    return null
  }

  return {
    rawInput,
    monthlyAmount,
    projection,
    insight,
    summary,
    isValid,
    activeMonth,
    setActiveMonth,
    handleInput,
    getErrorMessage,
  }
}
