const decimalToPercentageValue = (decimal) => {
  return Math.floor(decimal * 100).toFixed(0);
}

const basePriceToListingDayPrice = (basePrice, factors) => {
  if (!basePrice) {
    return 0;
  }
  return (basePrice + basePrice * factors.seasonal + basePrice * factors.dayOfWeek)
    .toFixed(0);
}

// TODO: Adjust this function so UI representations of color differences are clearer
// For now, just POC used to render cheaper dates a bit lighter/expensive dates darker
const darkenColor = (color, percent) => {
    var r=parseInt(color.substr(1,2),16);
    var g=parseInt(color.substr(3,2),16);
    var b=parseInt(color.substr(5,2),16);

    return '#'+
       Math.min(255,Math.floor(r*(1 - percent / 100))).toString(16)+
       Math.min(255,Math.floor(g*(1 - percent / 100))).toString(16)+
       Math.min(255,Math.floor(b*(1 - percent / 100))).toString(16);
}

export default {
  decimalToPercentageValue,
  basePriceToListingDayPrice,
  darkenColor
};
