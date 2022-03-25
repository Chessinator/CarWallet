import "./Property.css";

const Property = ({ name, value }) =>
    <div className="row">
        <div className="col-md-2">{name}: </div>
        <div className="col">{value}</div>
    </div>

export default Property;