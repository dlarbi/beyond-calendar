import { format, startOfMonth, subHours } from 'date-fns';
import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import CalendarDay from './calendar-day/CalendarDay';
import Utils from './../../utils/utils';
import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import styles from './Calendar.module.scss'

const listingToCalendarEvent = (listing) => {
  return listing.days.map(day => {
    return {
        title: `Reservation ${new Date(day.date)}`,
        date: new Date(day.date),
        price: Utils.basePriceToListingDayPrice(listing.basePrice, day.factors),
        factors: day.factors,
        basePrice: listing.basePrice,
        isBlocked: day.isBlocked
    }
  })
}

export const Calendar = ({ listing }) => {
  let [currentMonth, setCurrentMonth] = useState(
    startOfMonth(new Date())
  );

  // TODO: Don't call this every render.  Not performant
  const events = listingToCalendarEvent(listing);

  return (
    <div className={styles.beyondCalendar}>
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={date => setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody
          events={events}
          renderDay={data =>
            data.map((item, index) => (
              <CalendarDay day={item} key={item.date} />
            ))
          }
        />
      </MonthlyCalendar>
    </div>
  );
};

export default Calendar;
