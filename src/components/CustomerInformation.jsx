import PropTypes from "prop-types";
const CustomerInformation = ({ handleFormData }) => {
  return (
    <>
      <h5 className="mb-3 sub-header">Customer Information</h5>
      <div className="section">
        <div className="form-group">
          <label>
            First Name<span className="text-red">*</span>
          </label>
          <input
            name="firstName"
            onChange={handleFormData}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Last Name<span className="text-red">*</span>
          </label>
          <input
            name="lastName"
            onChange={handleFormData}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Email<span className="text-red">*</span>
          </label>
          <input
            name="email"
            onChange={handleFormData}
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Phone<span className="text-red">*</span>
          </label>
          <input
            name="phone"
            onChange={handleFormData}
            type="text"
            className="form-control"
            required
          />
        </div>
      </div>
    </>
  );
};

CustomerInformation.propTypes = {
  handleFormData: PropTypes.func.isRequired,
};

export default CustomerInformation;
