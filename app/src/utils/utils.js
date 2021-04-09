const decimalToPercentage = (decimal) => {
  return Math.floor(decimal * 100).toFixed(0);
}

const basePriceToListingDayPrice = (basePrice, factors) => {
  if (!basePrice) {
    return 0;
  }
  return (basePrice + basePrice * factors.seasonal + basePrice * factors.dayOfWeek)
    .toFixed(0);
}

export default {
  decimalToPercentage,
  basePriceToListingDayPrice
};
