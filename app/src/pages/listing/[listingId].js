import { useRouter } from 'next/router'
import ListingContainer from './../../containers/listing/ListingContainer';

const Listing = () => {
  const router = useRouter()
  const { listingId } = router.query

  return <ListingContainer listingId={listingId} />
}

export default Listing
