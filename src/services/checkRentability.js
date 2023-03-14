export function checkRentability(currentMonth, lastMonth) {
  if(!lastMonth) {
    return '0.00'
  }
  const rentability = ((currentMonth.value/lastMonth.value) -1) * 100
  return Math.round(rentability)
}