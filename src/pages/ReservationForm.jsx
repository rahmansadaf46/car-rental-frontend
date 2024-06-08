import { useState } from "react";
import AdditionalCharges from "../components/AdditionalCharges";
import ChargesSummary from "../components/ChargesSummary";
import CustomerInformation from "../components/CustomerInformation";
import Header from "../components/Header";
import ReservationDetails from "../components/ReservationDetails";
import VehicleInformation from "../components/VehicleInformation";
import { calculateRentalCharges } from "../service/apiService";
import CustomModal from "../components/CustomModal";

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    reservationId: "",
    pickUpDate: null,
    returnDate: null,
    discount: "",
    vehicle: {},
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    collisionDamageWaiver: false,
    liabilityInsurance: false,
    rentalTax: false,
  });

  const [totalCharges, setTotalCharges] = useState(null);
  const [breakdown, setBreakdown] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleFormData = (e) => {
    if (e.target.type === "checkbox") {
      setReservationData({
        ...reservationData,
        [e.target.name]: !reservationData[e.target.name],
      });
    } else {
      setReservationData({
        ...reservationData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await calculateRentalCharges(reservationData);
      setTotalCharges(data.total);
      setBreakdown(data.breakdown);
      setError(null);
    } catch (error) {
      setError('Failed to calculate rental charges');
      setTotalCharges(null);
      setBreakdown([]);
    }
    setShowModal(true); // Show the modal on form submit
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <Header />
        <div className="row mt-4">
          <div className="col-lg-4">
            <ReservationDetails
              handleFormData={handleFormData}
              reservationData={reservationData}
            />
            <VehicleInformation handleFormData={handleFormData} />
          </div>
          <div className="col-lg-4">
            <CustomerInformation handleFormData={handleFormData} />
            <AdditionalCharges
              handleFormData={handleFormData}
              reservationData={reservationData}
            />
          </div>
          <div className="col-lg-4">
            <ChargesSummary breakdown={breakdown} totalCharges={totalCharges} error={error} />
          </div>
        </div>
      </form>
      <CustomModal totalCharges={totalCharges} reservationData={reservationData} breakdown={breakdown} showModal={showModal} handleCloseModal={handleCloseModal}/>
    </div>
  );
};

export default ReservationForm;
