import { useRecoilState } from 'recoil';
import { listingsState } from './../../state/atoms';
import Link from 'next/link'
import ListingCard from './components/listing-card/ListingCard';
import styles from './ListingsContainer.module.scss';

// TODO: I think our "containers" are actually just what nextjs calls pages
// Refactor to remove a redundant-seeming layer of components
const ListingsContainer = () => {
  const [listings, setListings] = useRecoilState(listingsState);
  return (
    <div className={styles.listingsContainer}>
      {listings && listings.map(listing =>
        <ListingCard listing={listing} key={listing.id}/>
      )}
    </div>
  )
}

export default ListingsContainer
