import { useState } from 'react';

const RegisterController = () => {

    const [values, setValues] = useState(() => ({
        email: "",
        password: "",
        repassword: "",
        firstname: "",
        lastname: ""
    }));

    const [errors, setErrors] = useState({});

    const passwordSecurityCheck = password => {
        let messages = [];
        let weakness = 0;
        const weaknessThreshhold = 2;

        if(password.length < 8) {
            weakness += 2;
            messages = [...messages, "has at least 8 letters"];
        }
        if (!(/[a-z]/.test(password))) {
            weakness += 2;
            messages = [...messages, "has lower case letters"];
        }
        if (!(/[A-Z]/.test(password))) {
            weakness += 1;
            messages = [...messages, "has upper case letters"];
        }
        if (!(/[0-9]/.test(password))) {
            weakness += 1;
            messages = [...messages, "has numbers"];
        }
        if (!(/[^A-Za-z0-9]/.test(password))) {
            weakness += 1;
            messages = [...messages, "has special letters"];
        }
        
        return {
            isValid: weakness < weaknessThreshhold,
            weakness,
            weaknessThreshhold,
            messages
        };
    };

    const inputChangeHandler = ({ target: { value, name } }) => {
        const updatedValues = {
            ...values,
            [name]: value
        }
        setValues(updatedValues)
        formValidator(updatedValues)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        formValidator(values)
    }

    const formValidator = ({
        email,
        password,
        repassword,
        firstname,
        lastname
    }) => {
        let error = {};

        if (!hasStringValue(email)) {
            error.email = "Please enter an email";
        } else {
            const firstAt = email.indexOf("@");
            const lastDot = email.lastIndexOf(".");
            if (firstAt <= 0 || lastDot <= 0 || lastDot < firstAt) {
                error.email = "Please enter a valid email";
            }
        }

        const passwordResult = passwordSecurityCheck(password);
        if (!passwordResult.isValid) {
            error.password = "Please select a stronger password\n"
            + passwordResult.messages.map(msg => "- " + msg).join("\n");
        }

        if (password != repassword) {
            error.repassword = "Please reenter the same password again correctly";
        }

        if (!hasStringValue(firstname)) {
            error.firstname = "Please enter a firstname";
        }

        if (!hasStringValue(lastname)) {
            error.lastname = "Please enter a lastname";
        }
        setErrors(error)
    }

    return { values, errors, inputChangeHandler, submitHandler }
}

const hasStringValue = (string) => {
    return string !== null && string !== undefined && string !== "";
}

export default RegisterController;