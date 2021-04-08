import styles from './CalendarDay.module.scss';

const CalendarDay = ({ price }) => {
  return (
    <div className={styles.calendarDay}>
      {price}
    </div>
  )
}

export default CalendarDay
