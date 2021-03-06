import "./Property.css";

const Property = ({
    id,
    name,
    value,
    disabled = true,
    onChange,
    placeholder,
    error,
    type,
    ratio = { name: 2, value: 7 }
}) =>
    <div className={`row property ${error && "error"}`}>
        <label className={`col-md-${ratio.name} property-name`} htmlFor={id ?? name}>{name}: </label>
        <div className={`col-md-${ratio.value} property-input`}>
            <input type={type ?? getType(id ?? name)} id={id ?? name} value={value} className="row property-value" onChange={onChange} placeholder={placeholder} disabled={disabled} />
            {error && <div className={`row property-error property-error-${id}`}>
                {error.message ?? error}
                {error.list &&
                    <ul className="property-errorlist">
                        {error.list.map((msg, i) => <li className="property-errorlist-entry" key={i}>{msg}</li>)}
                    </ul>}
            </div>}
        </div>
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