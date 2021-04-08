import Calendar from './../../components/calendar/Calendar';
import styles from './ListingContainer.module.scss';
import ListingCard from './../../containers/listings/components/listing-card/ListingCard';

// TODO: Determine how we can get containers to be responsible for fetching
// data and populating a reducer, with server side rendering.  Maybe containers concept shouldnt exist TBD.
const ListingContainer = ({ listing }) => {
  return (
    <div className={styles.listingContainer}>
      <ListingCard listing={listing} />
      <Calendar listing={listing} />
    </div>
  )
}

export default ListingContainer
