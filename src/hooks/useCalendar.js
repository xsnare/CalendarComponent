import { useEffect, useState } from 'react';
import moment from 'moment';
// eslint-disable-line
// let select = [];

export const useCalendar = (d) => {
  const [calendar, setCalendar] = useState([]);
  const [date, setDate] = useState(moment(d));
  const [select, setSelect] = useState([]);
  const [resetAll, setResetAll] = useState(false);

  /** */
  const next = () => setDate((date) => date.clone().add(1, 'month'));
  const prev = () => setDate((date) => date.clone().add(1, 'month'));

  const selectDay = (el, i) => {
    if (el.wknd) return;

    select.push(moment(el.date));
    setSelect([...select]);
    calendar[i].select = 'select';
    let index = calendar.findIndex((el) => moment(el.date).isSame(select[0]));

    if (select.length > 2) {
      setSelect([]);
      setResetAll(true);
    }

    if (select[0].isAfter(moment(el.date))) {
      delete calendar[index].select;
      select.reverse().splice(1, 1);
      setSelect([...select]);
    }

    setCalendar([...calendar]);
  };

  /** */
  useEffect(() => {
    let arr = [];
    let start = date
      .clone()
      .startOf('month')
      .startOf('week')
      .subtract(1, 'days');

    while (arr.length < 42) {
      const day = start.add(1, 'days');
      day.day() === 6 || day.day() === 0
        ? arr.push({ date: day.clone()._d, wknd: 'wknd' })
        : arr.push({ date: day.clone()._d });
    }

    setCalendar(arr);
    setResetAll(false);
  }, [date, resetAll]);

  return {
    calendar,
    next,
    date,
    selectDay,
    select,
    prev
  };
};

// sel.current = [...sel.current, i];
// sel.current = sel.current.length === 3 ? [] : sel.current;
// if(sel.current[0] >= sel.current[1]){
//   sel.current.length = 1;
//   sel.current[0] = i;
// }

// setSelect(sel.current);

// select.push(i);
// let isMenor = select.reduce((prev, curr) => curr < prev);

// if (isMenor) {
//   select.splice(1, 1);
//   select[0] = i;
// }

// if (select.length > 2) {
//   select = [];
//   setAreSelect(true);
// }
