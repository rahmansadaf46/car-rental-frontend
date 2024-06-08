import PropTypes from "prop-types";

const AdditionalCharges = ({ reservationData, handleFormData }) => {
  return (
    <>
      <h5 className="mt-4 sub-header">Additional Charges</h5>
      <div className="section mt-3">
        <div>
          <label className="charge-label">
            <input
              type="checkbox"
              name="collisionDamageWaiver"
              checked={reservationData.collisionDamageWaiver}
              onChange={handleFormData}
            />
            <span className="charge-text">Collision Damage Waiver</span>
            <span className="charge-amount">$9.00</span>
          </label>
          <label className="charge-label">
            <input
              type="checkbox"
              name="liabilityInsurance"
              checked={reservationData.liabilityInsurance}
              onChange={handleFormData}
            />
            <span className="charge-text">Liability Insurance</span>
            <span className="charge-amount">$15.00</span>
          </label>
          <label className="charge-label last-charge-label">
            <input
              type="checkbox"
              name="rentalTax"
              checked={reservationData.rentalTax}
              onChange={handleFormData}
            />
            <span className="charge-text">Rental Tax</span>
            <span className="charge-amount">11.5%</span>
          </label>
        </div>
      </div>
    </>
  );
};

AdditionalCharges.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  reservationData: PropTypes.object,
};

export default AdditionalCharges;
