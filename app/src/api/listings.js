import config from './../config';

const fetchListings = async (dashboardId = 1) => {
  const res = await fetch(`${config.apiBaseUrl}/listings`);
  return res.json();
};

const fetchListing = async (listingId) => {
  const res = await fetch(`${config.apiBaseUrl}/calendar/${listingId}`);
  return res.json();
};

const updateListing = async (listing) => {
  const res = await fetch({
    method: 'POST',
    url: `${config.apiBaseUrl}/calendar/${listing.id}`,
    body: JSON.stringify({
      basePrice: listing.basePrice
    })
  });
  return res.json();
}

export default {
  fetchListings,
  fetchListing
}
