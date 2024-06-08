const Header = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h5 className="mt-3">
            <b>Reservation</b>
          </h5>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <button type="submit" className=" btn-print mt-2 ">
            <b>Print / Download</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
