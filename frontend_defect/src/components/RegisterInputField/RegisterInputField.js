import React from "react";
import './RegisterInputField.css'

export const RegisterInputField = ({ name, onChange, error }) => {

    const propName = name.toLowerCase();

    return (
        <div className="input-container row">
            <div className="input-field-container ">
                <label
                    className="input-field-label"
                    htmlFor={propName}
                >
                    {name}:
                </label>
                <input
                    className="input-field-element"
                    type={getType(propName)}
                    id={propName}
                    name={propName}
                    placeholder={`Please enter the ${propName}`}
                    onChange={onChange}
                />
            </div>
            {error &&
                <div className={"input-error-container" + (error && " input-error-" + propName)}>
                    <p className="input-error-text">{error}</p>
                    <i className="input-error-icon"></i>
                </div>
            }
        </div>
    )
}

const getType = propName => {
    if (propName.includes("password")) {
            return "password";
    } else if (propName.includes("email")) {
        return "email";
    } else {
        return "text";
    }
}

export default RegisterInputField;