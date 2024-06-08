import PropTypes from 'prop-types';

const ChargesSummary = ({ totalCharges, breakdown, error }) => {
  return (
    <>
      <h5 className="mb-3 sub-header">Charges Summary</h5>
      <div className="charges-summary-container">
        <div className="charges-summary-box">
          {error && <div className="alert alert-danger">{error}</div>}
          {breakdown && breakdown.length > 0 ? (
            <table className="charges-summary-table">
              <thead className="charges-summary-header">
                <tr>
                  <th className="charges-summary-cell pb-3">Charge</th>
                  <th className="charges-summary-cell text-center pb-3">Unit</th>
                  <th className="charges-summary-cell text-center pb-3">Rate</th>
                  <th className="charges-summary-cell text-center pb-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {breakdown.map((charge, index) => (
                  <tr className="pt-4" key={index}>
                    <td className="charges-summary-cell">{charge.charge}</td>
                    <td className="charges-summary-cell text-center">
                      {charge.unit !== null ? charge.unit : ""}
                    </td>
                    <td className="charges-summary-cell text-center">
                      ${charge.rate.toFixed(2)}
                    </td>
                    <td className="charges-summary-cell text-center">
                      ${charge.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
                <br/>
                <br/>
                <tr>
                  <td colSpan={3} className="charges-summary-total-label">
                    <b>Total</b>
                  </td>
                  <td className="charges-summary-total-value text-center">
                    <b>${totalCharges.toFixed(2)}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No charges calculated yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

ChargesSummary.propTypes = {
  totalCharges: PropTypes.number,
  breakdown: PropTypes.arrayOf(
    PropTypes.shape({
      charge: PropTypes.string.isRequired,
      unit: PropTypes.number,
      rate: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    })
  ).isRequired,
  error: PropTypes.string
};

export default ChargesSummary;
