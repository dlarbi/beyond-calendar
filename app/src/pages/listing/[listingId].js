import { RecoilRoot } from 'recoil';
import { listingState, listingsState } from './../../state/atoms';
import { initializeRecoilState }  from './../../state/initialize-state';

import _ from 'lodash';
import { useRouter } from 'next/router'
import ListingContainer from './../../containers/listing/ListingContainer';
import listingsApi from './../../api/listings';
import Constants from '../../constants/constants';

const allAtoms = { listing: listingState, listings: listingsState };

const Listing = ({ initialRecoilState }) => {
  const router = useRouter()
  const { listingId } = router.query

  return (
    <RecoilRoot initializeState={initializeRecoilState(initialRecoilState, allAtoms)}>
      <ListingContainer
        view={Constants.ListingViewTypes.Calendar}
      />
    </RecoilRoot>
  )
}

// TODO: Here we reload full listing data on page load of either the
// calendar or the dashboard; however, this seems hacky & it would be preferable to persist this data across navigation.
// Figure out how?
export async function getServerSideProps(context) {
  try {
    const listing = await listingsApi.fetchListing(context.query.listingId);
    // TODO: We're applying id to the survey object so we can have a reference later usable.
    // Talk to BE  about returning the `id` field on each `listing` object?
    listing.id = context.query.listingId;
    const listings = await listingsApi.fetchListings();

    const initialRecoilState = {
        listing: listing,
        listings: listings.listings
    }
    return { props: { initialRecoilState } };
  } catch (e) {
    console.log(e);
    return {
      props: {
        error: {
          statusCode: 500,
          message: `${Constants.ErrorMessages.FetchListingData}: ${e}`
        }
      }
    }
  }
}

export default Listing
