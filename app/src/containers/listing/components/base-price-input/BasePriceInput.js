import styles from './../../ListingContainer.module.scss';

function updateListingBasePrice(listing, val) {
  const updatedListing = _.clone(listing);
  updatedListing.basePrice = parseInt(val, 10);
  return updatedListing;
}

const BasePriceInput = ({ listing, handleChangeBasePrice }) => {
  return (
      <div className={styles.basePriceInputWrapper}>
        <div className={styles.basePriceLabel}>
          $
        </div>
        <input
          className={styles.basePriceInput}
          type="number"
          min="0"
          value={listing.basePrice}
          onChange={(e) => { handleChangeBasePrice(listing, e.target.value) }}
        />
      </div>
  )
}

export default BasePriceInput
