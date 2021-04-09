import { atom } from 'recoil';

const listingState = new atom({
  key: 'listingState',
  default: null
});

const listingsState = new atom({
  key: 'listingsState',
  default: []
});

export {
  listingsState,
  listingState
}
