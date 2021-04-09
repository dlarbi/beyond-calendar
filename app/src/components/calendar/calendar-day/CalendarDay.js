import React, { useState } from 'react';
import styles from './CalendarDay.module.scss';
import CalendarDayPopover from './../calendar-day-popover/CalendarDayPopover';
import Utils from './../../../utils/utils';

const CalendarDay = ({ day }) => {
  const [hover, setHover] = useState(false)
  return (
    <div className={styles.calendarDay}>
      <div onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
        <div style={{ color: Utils.darkenColor('#6fc5ca', (day.price / 10))}} className={styles.price}>
          ${day.price}
        </div>
        {hover && <CalendarDayPopover day={day} />}
      </div>

    </div>
  )
}

export default CalendarDay
