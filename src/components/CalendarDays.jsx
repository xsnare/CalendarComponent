export const CalendarDays = ({ calendar, selectDay }) => {
  return (
    <div className="days">
      {calendar.map((el, i) => (
        <div
          key={i}
          className={el.select || el.wknd}
          onClick={() => selectDay(el, i)}
        >
          {new Date(el.date).getDate()}
        </div>
      ))}
    </div>
  );
};
