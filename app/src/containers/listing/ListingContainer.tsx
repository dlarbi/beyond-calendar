import _ from 'lodash';
import { confirmAlert } from 'react-confirm-alert';

import { useRecoilState, useRecoilValue } from 'recoil';
import { listingState, listingsState } from './../../state/atoms';
import { selectListingDetails } from './../../state/selectors';
import listingsApi from './../../api/listings';

import Calendar from './../../components/calendar/Calendar';
import BasePriceInput from './components/base-price-input/BasePriceInput';
import styles from './ListingContainer.module.scss';
import ListingCard from './../../containers/listings/components/listing-card/ListingCard';
import Constants from './../../constants/constants';

import { Listing } from './../../types/types';

import 'react-confirm-alert/src/react-confirm-alert.css';

const ListingContainer = ({ view } : { view: string }) => {
  const [listing, setListing] = useRecoilState<Listing>(listingState);
  const listingDetails = useRecoilValue(selectListingDetails);

  // Currently only supports updates to `basePrice` property
  // TODO: Move this to a module/service of some sort so its reusable.
  // Learn where this is best practice in recoil.
  const updateListing = async (val: string) => {
    const updatedListing: Listing = _.clone(listing);
    updatedListing.basePrice = parseInt(val, 10);
    try {
      // NOTE: Comment out line 28/29 to successfully see state management on the Calendar
      // This API call fails for unknown reasons thus far.
      const response = await listingsApi.updateListing(updatedListing);
      const responseJson = await response.json();
      setListing(updatedListing)
    } catch (e) {
      console.log(e);
      confirmAlert(Constants.ExceptionObjects.SubmitFailure);
    }
  };

  return (
    <div className={styles.listingContainer}>
      <ListingCard listing={listingDetails} />
      <BasePriceInput listing={listing} handleChangeBasePrice={(e: any, val: string) => { updateListing(val); }} />
      {
        view === Constants.ListingViewTypes.Calendar &&
          <Calendar listing={listing} />
      }
    </div>
  )
}

export default ListingContainer
