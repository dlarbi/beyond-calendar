import Link from 'next/link';
import styles from './ListingCard.module.scss';
import Utils from './../../../../utils/utils';

const ListingCard = ({ listing }) => {
  console.log(listing)
  return (
    <div className={styles.listingCard}>
      <Link href={`/listing/${listing.id}`}>
        <a className={styles.content}>
          <div className={styles.image}>
            <img src={listing.picture} width="100%" />
          </div>
          <div className={styles.body}>
            <h3>{listing.title}</h3>
            <span>{listing.beds}</span>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              {Utils.decimalToPercentage(listing.health)}
            </div>
            <div className={styles.label}>
              Health Score
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ListingCard
