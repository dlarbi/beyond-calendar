import Link from 'next/link'
import ListingCard from './components/listing-card/ListingCard';
import styles from './ListingsContainer.module.scss';

const ListingsContainer = ({ listings }) => {
  return (
    <div className={styles.listingContainer}>
      {listings && listings.map(listing =>
        <ListingCard listing={listing} />
      )}
    </div>
  )
}

export default ListingsContainer
