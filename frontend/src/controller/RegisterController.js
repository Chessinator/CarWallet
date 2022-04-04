import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const RegisterController = () => {


    const navigate =  useNavigate();

    const [values, setValues] = useState(() => ({
        email: "test@test.test",
        password: "12345qQ!",
        repassword: "12345qQ!",
        firstname: "First",
        lastname: "Last"
    }));

    /*
        {
            email: "",
            password: "",
            repassword: "",
            firstname: "",
            lastname: ""
        }
    */
    const [errors, setErrors] = useState({});

    const passwordSecurityCheck = password => {
        let messages = [];
        let weakness = 0;
        const weaknessThreshhold = 2;

        if (password.length < 8) {
            weakness += 2;
            messages = [...messages, "has at least 8 letters"];
        }
        if (!(/[a-z]/.test(password))) {
            weakness += 1;
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

    const inputChangeHandler = ({ target: { value, id } }) => {
        const updatedValues = {
            ...values,
            [id]: value
        }
        setValues(updatedValues)
        formValidator(updatedValues)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        formValidator(values)

        if (Object.entries(errors).length !== 0) {
            return;
        }

        const body = JSON.stringify({
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname
        });

        fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body
        })
            .then(response => response.json())
            .then(_data => navigate("../login"))
            .catch(error => console.log("ERROR: ", error))
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
            if (firstAt <= 1 || lastDot <= 2 || lastDot < firstAt) {
                error.email = "Please enter a valid email";
            }
        }

        const passwordResult = passwordSecurityCheck(password);
        if (!passwordResult.isValid) {
            error.password = {
                message: "Please select a stronger password",
                list: passwordResult.messages
            };
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