import Link from 'next/link';
import styles from './ListingCard.module.scss';

const ListingCard = ({ listing }) => {
  return (
    <div className={styles.listingCard}>
      <Link href={`/listing/${listing.id}`}>
        <a className={styles.listingCardContent}>
          <div className={styles.listingCardImage}>
            <img src={listing.picture} width="100%" />
          </div>
          <div className={styles.listingCardBody}>
            <h3>{listing.title}</h3>
            <span>{listing.beds}</span>
          </div>
          <div className={styles.listingCardData}>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ListingCard
