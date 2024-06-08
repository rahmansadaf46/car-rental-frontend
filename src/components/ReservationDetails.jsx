import { useState } from "react";
import DateTimePicker from "./DateTimePicker";
import PropTypes from "prop-types";
import { calculateDuration, dataConverter } from "../utils/mainUtil";

const ReservationDetails = ({
  handleFormData,
  reservationData,
}) => {
  const [duration, setDuration] = useState("");
  const handlePickUpDate = (date) => {
    handleFormData(dataConverter("pickUpDate", date));
    const durationData = calculateDuration(date, reservationData.returnDate);
    setDuration(durationData);
  };

  const handleReturnDate = (date) => {
    handleFormData(dataConverter("returnDate", date));
    const durationData = calculateDuration(reservationData.pickUpDate, date);
    setDuration(durationData);
  };

  return (
    <>
      <h5 className="mb-3 sub-header">Reservation Details</h5>
      <div className="section">
        <div className="form-group">
          <label>Reservation ID</label>
          <input
            type="text"
            onChange={handleFormData}
            name="reservationId"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Pickup Date<span className="text-red">*</span>
          </label>
          <DateTimePicker
            value={reservationData.pickUpDate}
            minValue={new Date()}
            handleDate={handlePickUpDate}
          />
        </div>
        <div className="form-group">
          <label>
            Return Date<span className="text-red">*</span>
          </label>
          <DateTimePicker
            value={reservationData.returnDate}
            minValue={reservationData.pickUpDate}
            handleDate={handleReturnDate}
          />
        </div>
        <div className="form-group d-flex">
          <label className="duration-label">Duration</label>
          <input
            type="text"
            className="form-control ms-5 duration-text text-center"
            value={duration}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Discount</label>
          <input
            onChange={handleFormData}
            name="discount"
            type="text"
            className="form-control"
          />
        </div>
      </div>
    </>
  );
};

ReservationDetails.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  reservationData: PropTypes.object,
};

export default ReservationDetails;
