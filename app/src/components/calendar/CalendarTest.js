import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);
const events = [
  {
    title: 'Test event',
    start: start,
    end: end,
    allDay: true
    // resource?: any,
  }
];

const BeyondCalendar = () => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      views={['month']}
      tooltipAccessor={() => 'hello world'}
    />
  )
}

export default BeyondCalendar;
