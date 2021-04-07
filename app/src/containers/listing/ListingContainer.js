import BeyondCalendar from './../../components/calendar/Calendar';
import styles from './ListingContainer.module.scss';

const ListingContainer = () => {
  return (
    <div className={styles.listingContainer}>
      <BeyondCalendar />
    </div>
  )
}

export default ListingContainer
