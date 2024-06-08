// src/components/Loader.js
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status">
      </Spinner>
    </div>
  );
};

export default Loader;
