import { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const DateTimePicker = ({ value, handleDate, minValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsOpen(true);
  };
  return (
    <div className="date-time-picker" onClick={toggleDatePicker}>
      <DatePicker
        selected={value}
        onChange={(date) => {
          handleDate(date);
        }}
        required
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Select Date and Time"
        className="custom-date-picker"
        minDate={minValue ? minValue : new Date()}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
      />
      <span className="calendar-icon">
        <FontAwesomeIcon icon={faCalendar} />
      </span>
    </div>
  );
};

DateTimePicker.propTypes = {
  handleDate: PropTypes.func.isRequired,
  value: PropTypes.string,
  minValue: PropTypes.string,
};

export default DateTimePicker;
