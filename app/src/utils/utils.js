const decimalToPercentage = (decimal) => {
  return Math.floor(decimal * 100).toFixed(0);
}

const basePriceToListingDayPrice = (basePrice, factors) => {
  return basePrice + basePrice * factors.seasonal + basePrice * factors.dayOfWeek;
}

export default {
  decimalToPercentage,
  basePriceToListingDayPrice
};
