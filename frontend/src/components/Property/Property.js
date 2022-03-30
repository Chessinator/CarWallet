import "./Property.css";

const Property = ({ name, value, disabled = true, onChange, placeholder}) =>
    <div className="row property">
        <label className="col-md-4 property-name" htmlFor={name}>{name}: </label>
        <input type={getType(name)} id={name} value={value} className="col property-value" onChange={onChange} placeholder={placeholder} disabled={disabled} />
    </div>

export default Property;

const getType = name => {
    if (name.includes("date")) {
        return "date"
    } else if (name.includes("email")) {
        return "email"
    } else if (name.includes("password")) {
        return "password"
    }
    return "text"
}