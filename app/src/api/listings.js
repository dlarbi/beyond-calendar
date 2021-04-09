import config from './../config';

const fetchListings = async (dashboardId = 1) => {
  const res = await fetch(`${config.apiBaseUrl}/listings`);
  return res.json();
};

const fetchListing = async (listingId) => {
  const res = await fetch(`${config.apiBaseUrl}/calendar/${listingId}`);
  return res.json();
};

// The update method is throwing an exception when calling `await result.json()` on the response from our
// `fetch()` request. Unsure if this is a problem in my code or in the response.
// I will hardcode a response, but leave the error handling which will display in the case this POST request fails.  Or maybe I'll figure out root cause here soon :)
const updateListing = async (listing) => {
  const res = await fetch({
    method: 'POST',
    url: `${config.apiBaseUrl}/calendar/${listing.id}`,
    body: JSON.stringify({
      basePrice: listing.basePrice
    }),
    contentType: 'application/json'
  });

  return res.json();
}

export default {
  fetchListings,
  fetchListing,
  updateListing
}
