import _ from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listingState, listingsState } from './../../state/atoms';
import { selectListingDetails } from './../../state/selectors';

import Calendar from './../../components/calendar/Calendar';
import BasePriceInput from './components/base-price-input/BasePriceInput';
import styles from './ListingContainer.module.scss';
import ListingCard from './../../containers/listings/components/listing-card/ListingCard';

function updateListingBasePrice(listing, val) {
  const updatedListing = _.clone(listing);
  updatedListing.basePrice = parseInt(val, 10);
  return updatedListing;
}

const ListingContainer = () => {
  const [listing, setListing] = useRecoilState(listingState);
  const listingDetails = useRecoilValue(selectListingDetails);

  return (
    <div className={styles.listingContainer}>
      <ListingCard listing={listingDetails} />
      <BasePriceInput listing={listing} handleChangeBasePrice={(listing, e) => { setListing(updateListingBasePrice(listing, e)) }} />

      <Calendar listing={listing} />
    </div>
  )
}

export default ListingContainer
