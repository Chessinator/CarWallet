import "./Property.css";

const Property = ({ name, value, disabled = true, onChange, placeholder}) =>
    <div className="row property">
        <label className="col-md-4 property-name" htmlFor={name}>{name}: </label>
        <input type="text" id={name} value={value} className="col property-value" onChange={onChange} placeholder={placeholder} disabled={disabled} />
    </div>

export default Property;