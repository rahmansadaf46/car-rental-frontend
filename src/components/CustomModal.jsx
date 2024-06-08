import { useRef } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactToPrint from "react-to-print";
import logo from "../assets/logo.png";
import { formatDate } from "../utils/mainUtil";

const CustomModal = ({
  totalCharges,
  breakdown,
  reservationData,
  showModal,
  handleCloseModal,
}) => {
  const modalBodyRef = useRef();
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Body ref={modalBodyRef}>
        <div className="custom-modal-body">
          <div className="custom-modal-row">
            <div className="custom-modal-col-lg-6">
              <div className="custom-modal-row">
                <div className="custom-modal-col-lg-6">
                  <img className="custom-modal-logo" src={logo} alt="Company Logo" />
                  <h5 className="custom-modal-section-title">
                    RENTER INFO
                  </h5>
                  <div className="custom-modal-text">
                    <p>{`${reservationData.firstName} ${reservationData.lastName}`}</p>
                    <p>Email: {reservationData.email}</p>
                    <p>Phone: {reservationData.phone}</p>
                  </div>
                </div>
                <div className="custom-modal-col-lg-6">
                  <div className="custom-modal-text">
                    <p>CH Car Place Inc</p>
                    <p>Email: test@gmail.com</p>
                    <p>162 Bargen Street</p>
                    <p>Brooklyn, NY 11213</p>
                    <p>PH#</p>
                  </div>
                  <br />
                  <div className="custom-modal-text">
                    <p>Monday 9:00 AM-6:00 PM</p>
                    <p>Tuesday 9:00 AM-6:00 PM</p>
                    <p>Wednesday 9:00 AM-6:00 PM</p>
                    <p>Thursday 9:00 AM-6:00 PM</p>
                    <p>Friday 9:00 AM-6:00 PM</p>
                    <p>Saturday 9:00 AM-6:00 PM</p>
                    <p>Sunday 9:00 AM-6:00 PM</p>
                  </div>
                </div>
              </div>
              <h5 className="custom-modal-section-title">
                ADDITIONAL AUTHORIZED DRIVER(S)
              </h5>

              <div>
                <h5 className="custom-modal-section-title">
                  UNIT DETAILS
                </h5>
                <div className="custom-modal-text">
                  <p>Unit: {reservationData.vehicle.type} </p>
                  <p>Make and Model: {reservationData.vehicle.make} {reservationData.vehicle.model}</p>
                </div>
                <br />
                <div className="custom-modal-text">
                  <p>Bill to</p>
                  <p>Payment method: unpaid</p>
                  <p>Auth: $0.00</p>
                </div>
                <br/>
                <div className="custom-modal-text-large">
                  <p>Referral</p>
                  <p>
                    NOTICE: Collision Insurance (CDW) - $7 per day Limits
                    liability of damages to ones own vehicle up to $1000 in
                    event of an accident, by waiving this coverage renter agrees
                    to be held liable for damages up to the entire value of the
                    vehicle.
                  </p>
                </div>
                <div className="custom-modal-text-large custom-modal-row">
                  <div className="custom-modal-col-6 custom-modal-text-center">
                    <p>Accept</p>
                  </div>
                  <div className="custom-modal-col-6 custom-modal-text-center">
                    <p>Reject</p>
                  </div>
                </div>
                <div className="custom-modal-text-large">
                  <p>
                    Rental service may be refused to anyone when done in the best
                    interest of the renting company or customer - Rates do not
                    include gasoline. - Reserves the right to collect deposit
                    covering estimated rental charges.
                  </p>
                </div>
              </div>
            </div>

            <div className="custom-modal-col-lg-6">
              <div>
                <h5 style={{ fontSize: "20px" }}>
                  <b>Reservation</b>
                </h5>
                <h5 className="custom-modal-section-title">
                  RA #{reservationData.reservationId}
                </h5>
                <div className="custom-modal-text-large">
                  <p>REPAIR ORDER</p>
                  <p>CLAIM</p>
                </div>
                <div className="custom-modal-text">
                  <p>Date/Time Out: {formatDate(reservationData.pickUpDate)}</p>
                  <p>Date/Time In: {formatDate(reservationData.returnDate)}</p>
                </div>
                <div className="custom-modal-charges">
                  <h5 className="custom-modal-section-title">
                    CHARGE SUMMARY
                  </h5>
                  <table className="custom-modal-charges-table">
                    <thead>
                      <tr>
                        <td colSpan={4}></td>
                        <td className="custom-modal-thead"><b>Unit</b></td>
                        <td className="custom-modal-thead"><b>Price</b></td>
                        <td className="custom-modal-thead"><b>Amount</b></td>
                      </tr>
                    </thead>
                    <tbody>
                      {breakdown.map((item, index) => (
                        <tr key={index}>
                          <td colSpan={4}>{item.charge}</td>
                          <td className="custom-modal-tbody">{item.unit}</td>
                          <td className="custom-modal-tbody">${item.rate?.toFixed(2)}</td>
                          <td className="custom-modal-tbody">${item.total?.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={6}><b>Total Charges</b></td>
                        <td className="custom-modal-tbody"><b>${totalCharges?.toFixed(2)}</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <div className="custom-modal-text-large">
                  <p>
                    Your rental agreement offers, for an additional charge, an
                    optional waiver to cover all or a part of your
                    responsibility for damage to or loss of the vehicle: Before
                    deciding whether to purchase the waiver, you may wish to
                    determine whether your own automobile insurance or credit
                    card agreement provides you coverage for rental vehicle
                    damage or loss and determine the amount of the deductible
                    under your own insurance coverage. The purchase of the
                    waiver is not mandatory. The waiver is not Insurance. I
                    acknowledge that I have received and read a copy of this.
                  </p>
                </div>
                <div className="custom-modal-footer-signature">
                  <p>Renters Signature</p>
                  <p>------------------------------------</p>
                  <p>Additional Driver 1</p>
                  <p>------------------------------------</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <ReactToPrint
          trigger={() => <Button variant="primary">Print</Button>}
          content={() => modalBodyRef.current}
        />
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  totalCharges: PropTypes.number,
  breakdown: PropTypes.arrayOf(
    PropTypes.shape({
      charge: PropTypes.string.isRequired,
      unit: PropTypes.number,
      rate: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
  reservationData: PropTypes.object,
};

export default CustomModal;
