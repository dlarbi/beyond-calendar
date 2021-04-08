import _ from 'lodash';
import { useRouter } from 'next/router'
import ListingContainer from './../../containers/listing/ListingContainer';
import listingsApi from './../../api/listings';
import Constants from '../../constants/constants';

const Listing = ({ listing }) => {
  const router = useRouter()
  const { listingId } = router.query

  return <ListingContainer
    listing={listing}
    view={Constants.ListingViewTypes.Calendar}
  />
}

export async function getServerSideProps(context) {
  const listing = await listingsApi.fetchListing(context.query.listingId);

  // TODO: HACK. This is a hack to get full listing data (image, etc) into our Listing view
  // replace with a more complete state-management solution so that we can derive this data from state
  // where we need it (ListingContainer)
  const listings = await listingsApi.fetchListings();
  const fullListing = _.find(listings.listings, { id: parseInt(context.query.listingId, 10) });
  return {
    props: {
      listing: {
        ...listing,
        ...fullListing
      }
    }
  };
}

export default Listing
