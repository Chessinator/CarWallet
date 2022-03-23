import React from "react";
import './InputField.css'

export const InputField = ({ name, onChange, error }) => {

    const propName = name.toLowerCase();

    return (
        <div className="input-container">
            <div className="input-field-container">
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
                <div className="input-error-container">
                    <p className="input-error-text">{error}</p>
                    <i className="input-error-icon"></i>
                </div>
            }
        </div>
    )
}

const getType = propName => {
    switch (propName) {
        case propName.includes("password"):
            return "password";
            
        case propName.includes("email"):
            return "email";
    
        default:
            return "text";
    }
}

export default InputField;