import { useCalendar } from '../hooks/useCalendar';
import { CalendarDays } from './CalendarDays';
let initialDate = [2022, 2, 10];

export const Calendar = () => {
  const { calendar, date, next, prev, selectDay, select } = useCalendar(
    initialDate
  );

  let from = select[0]?.format('MMMM DD, YYYY');
  let to = select[1]?.format('MMMM DD, YYYY');

  return (
    <div>
      <div className="from-to">
        <p>From: {from}</p>
        <p>To: {to}</p>
      </div>
      <h3>Today: {date.format('MMMM DD, YYYY')}</h3>
      <CalendarDays calendar={calendar} selectDay={selectDay} />
      <button onClick={prev}>-</button>
      <button onClick={next}>+</button>
    </div>
  );
};
