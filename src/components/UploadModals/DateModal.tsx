import React, { forwardRef, useState, useRef } from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateModal.scss';

type DateModalProps = {
  setSelected: (type: string, value: string | boolean) => void;
};

function DateModal({ setSelected }: DateModalProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hidden, setHidden] = useState<boolean>(true);

  const ref = React.createRef();
  const startRef = useRef<DatePicker>(null);
  const endRef = useRef<DatePicker>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomDateInput = forwardRef(({ onClick, value }: any, refs: any) => (
    <button onClick={onClick} value={value} onChange={onClick} type="button" className={value && 'selected'} ref={refs}>
      {value || 'YYYY/MM/DD'}
    </button>
  ));

  CustomDateInput.displayName = 'CustomDateInput';

  const openDatePicker = (nowRef: React.RefObject<DatePicker>) => {
    if (nowRef.current) nowRef.current.setOpen(true);
    setHidden(false);
  };

  const closeDatePicker = (nowRef: React.RefObject<DatePicker>) => {
    if (nowRef.current) nowRef.current.setOpen(false);
    setHidden(true);
  };

  return (
    <div className="dateModal-wrapper">
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yyyy/MM/dd"
        onChange={(date) => date && setStartDate(date)}
        customInput={<CustomDateInput ref={ref} />}
        popperModifiers={[{ name: 'flip', enabled: false }]}
        showPopperArrow={false}
        disabledKeyboardNavigation
        shouldCloseOnSelect={false}
        onCalendarOpen={() => openDatePicker(startRef)}
        ref={startRef}
      >
        <button
          type="button"
          className="closeBtn"
          onClick={() => {
            closeDatePicker(startRef);
            if (startDate !== null)
              setSelected(
                'firstDay',
                `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate
                  .getDate()
                  .toString()
                  .padStart(2, '0')}`,
              );
          }}
        >
          선택 완료
        </button>
      </DatePicker>
      <span className="line" />
      <DatePicker
        locale={ko}
        selected={endDate}
        dateFormat="yyyy/MM/dd"
        onChange={(date) => date && setEndDate(date)}
        customInput={<CustomDateInput ref={ref} />}
        popperModifiers={[{ name: 'flip', enabled: false }]}
        showPopperArrow={false}
        disabledKeyboardNavigation
        shouldCloseOnSelect={false}
        onCalendarOpen={() => openDatePicker(endRef)}
        ref={endRef}
      >
        <button
          type="button"
          className="closeBtn"
          onClick={() => {
            closeDatePicker(endRef);
            if (endDate !== null)
              setSelected(
                'lastDay',
                `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate
                  .getDate()
                  .toString()
                  .padStart(2, '0')}`,
              );
          }}
        >
          선택 완료
        </button>
      </DatePicker>
      {!hidden && <div className="dimmed" />}
    </div>
  );
}

export default DateModal;
