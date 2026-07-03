export function calculatePrice(amount) {
  if (amount >= 100) {
    return amount * 0.9;
  }

  return amount;
}
