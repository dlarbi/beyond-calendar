import styles from './CalendarDay.module.scss';

const CalendarDay = ({ day }) => {
  return (
    <div className={styles.calendarDay}>
      {day.price}
    </div>
  )
}

export default CalendarDay
