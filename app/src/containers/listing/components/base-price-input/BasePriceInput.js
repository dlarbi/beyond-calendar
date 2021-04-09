import styles from './../../ListingContainer.module.scss';

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
