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
// NOTE: If you comment out this API call in ListingContainer, the rest of basePrice state management is successful in the client
const updateListing = async (listing) => {
  const res = await fetch({
    method: 'POST',
    url: `${config.apiBaseUrl}/calendar/${listing.id}`,
    body: JSON.stringify({
      basePrice: listing.basePrice
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return res.json();
}

export default {
  fetchListings,
  fetchListing,
  updateListing
}
