import _ from 'lodash';
import { selector } from 'recoil';
import { listingsState, listingState } from './atoms';

const selectListingDetails = selector({
  key: 'listingDetails',
  get: ({get}) => {
    const listings = get(listingsState);
    const selectedListing = get(listingState);
    return _.find(listings, { id: parseInt(selectedListing.id, 10) });
  }
})

export {
  selectListingDetails
}
