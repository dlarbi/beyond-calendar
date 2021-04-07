import Link from 'next/link'
import ListingCard from './components/listing-card/ListingCard';

const ListingsContainer = ({ listings }) => {
  return (
    <div className="listings-container">
      {listings && listings.map(listing =>
        <ListingCard listing={listing} />
      )}
    </div>
  )
}

export default ListingsContainer
