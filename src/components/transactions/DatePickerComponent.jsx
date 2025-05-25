import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './EditTransactionForm/EditTransactionForm.module.css'
import { addDays } from 'date-fns';

const DatePickerComponent = ({values, setFieldValue}) => {
  return (
      <DatePicker
        className={s.input}
        showIcon
        selected={values.date}
        dateFormat='dd.MM.yyyy'
        maxDate={addDays(new Date(), 0)}
        onChange={(date) => {
          setFieldValue('date', date);
        }}
        icon={
          <svg
            width='18'
            height='21'
            className={s.calendar}
            pointerEvents='none'
          >
            <use href='/icons.svg#calendar'></use>
          </svg>
        }
      />
  );
}

export default DatePickerComponent