import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="row">
        <div className="col-1">
          <label className="col-form-label">
            <b>City</b>
          </label>
        </div>
        <div className="col-7">
          <input type="search" className="form-control" />
        </div>
        <div className="col-2">
          <input type="submit" className="btn btn-primary" value="Search" />
        </div>

        <div className="col-2">
          <button className="btn btn-secondary">Current</button>
        </div>
      </div>
    </form>
  );
}
