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
        let msg = [];
        let weakness = 0;
        const weaknessThreshhold = 3;

        password.length < 8 && (weakness += 3, msg = [...msg, "has at least 8 letters"])
        !(/[a-z]/.test(password)) && (weakness += 2, msg = [...msg, "has lower case letters"])
        !(/[A-Z]/.test(password)) &&  (weakness += 1, msg = [...msg, "has upper case letters"])
        !(/[0-9]/.test(password)) &&  (weakness += 1, msg = [...msg, "has numbers"])
        !(/[^A-Za-z0-9]/.test(password)) &&  (weakness += 1, msg = [...msg, "has special letters"])
        
        return {
            isValid: weakness < weaknessThreshhold,
            weakness,
            weaknessThreshhold,
            msg
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

        if (!email) {
            error.email = "Please enter an email";
        } else {
            const firstAt = email.indexOf("@");
            const lastDot = email.lastIndexOf(".");
            if (firstAt <= 0 || lastDot < 0 || lastDot < firstAt) {
                error.email = "Please enter a valid email";
            }
        }

        const passwordResult = !passwordSecurityCheck(password);
        if (!passwordResult.isValid) {
            error.password = "Please select a stronger password\n"
            + passwordResult.msg.map(m => " - " + m).join("\n");
        }

        if (password != repassword) {
            error.repassword = "Please reenter the same password again correctly";
        }

        if (!firstname) {
            error.firstname = "Please enter a first name";
        }

        if (!lastname) {
            error.lastname = "Please enter a last name";
        }

        setErrors(error)
    }

    return { values, errors, inputChangeHandler, submitHandler }
}


export default RegisterController;