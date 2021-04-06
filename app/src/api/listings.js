import config from './../config';

const fetchListings = async (dashboardId) => {
  const res = await fetch(`${config.apiBaseUrl}/listings`);
  return res.json();
};

const fetchListing = async (listingId) => {
  const res = fetch(`${config.apiBaseUrl}/dashboard/:listingId`);
  return res.json();
};

export default {
  fetchListings,
  fetchListing
}
