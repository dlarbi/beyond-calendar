import moment from 'moment';
import styles from './CalendarDayPopover.module.scss';

const CalendarDayPopover = ({ day }) => {
  return (
    <div className={styles.calendarDayPopover}>

      <div className={styles.header}>
        <div className={styles.date}>
          {moment(day.date).format('MMMM Do YYYY')}
        </div>
        {day.isBlocked &&
          <div className={styles.blocked}>Blocked</div>
        }
        <div className={styles.price}>
          ${day.price}
        </div>
      </div>

      <div className={styles.body}>
        <table>
          <tbody>
            <tr>
              <td align="left">${day.basePrice}</td>
              <td align="right">Base</td>
            </tr>
            <tr>
              <td align="left">${(day.factors.seasonal * day.basePrice).toFixed(0)}</td>
              <td align="right">Seasonality</td>
            </tr>
            <tr>
              <td align="left">${(day.factors.dayOfWeek * day.basePrice).toFixed(0)}</td>
              <td align="right">Day of week</td>
            </tr>
            <tr className={styles.predictedPrice}>
              <td align="left">{day.price}</td>
              <td align="right">Predicted Price</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CalendarDayPopover
