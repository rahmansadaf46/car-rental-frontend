import { useEffect, useState } from "react";
import { getCarsList } from "../service/apiService";
import PropTypes from "prop-types";
import { dataConverter } from "../utils/mainUtil";
const VehicleInformation = ({ handleFormData }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vehicleType, setVehicleType] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [vehicleOptions, setVehicleOptions] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carList = await getCarsList();
        setCars(carList.data);
        setVehicleOptions(carList.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filterVehiclesByType = (type) => {
    if (vehicleType !== type) {
      setVehicleType(type);
      setSelectedVehicleId("")
      handleFormData(dataConverter("vehicle", {}));
    }
    if (type !== "") {
      const filteredVehicles = cars.filter((car) => car.type === type);
      setVehicleOptions(filteredVehicles);
    } else {
      setSelectedVehicleId("");
      setVehicleOptions(cars);
    }
  };

  const handleVehicle = (carId) => {
    if (carId === "") {
      handleFormData(dataConverter("vehicle", {}));
    }
    const selectedCar = vehicleOptions.find((car) => car.id === carId);
    setSelectedVehicleId(carId);
    setVehicleType(selectedCar.type);
    handleFormData(dataConverter("vehicle", selectedCar));
  };

  const uniqueVehicleTypes = [...new Set(cars.map((car) => car.type))];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cars: {error.message}</p>;

  return (
    <>
      <h5 className="mt-4 sub-header">Vehicle Information</h5>
      <div className="section mt-3">
        <div className="form-group">
          <label>
            Vehicle Type<span className="text-red">*</span>
          </label>
          <select
            className="form-control dropdown"
            value={vehicleType}
            onChange={(e) => filterVehiclesByType(e.target.value)}
            required
          >
            <option value="">Select a type</option>
            {uniqueVehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>
            Vehicle<span className="text-red">*</span>
          </label>
          <select
            value={selectedVehicleId}
            onChange={(e) => handleVehicle(e.target.value)}
            className="form-control dropdown"
            required
          >
            <option value="">Select a vehicle</option>
            {vehicleOptions?.map((car) => (
              <option key={car?.id} value={car.id}>
                {car?.make} {car?.model} ({car?.year})
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

VehicleInformation.propTypes = {
  handleFormData: PropTypes.func.isRequired,
};

export default VehicleInformation;
