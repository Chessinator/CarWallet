import InputField from "../InputField/"
import RegisterController from "../../controller/RegisterController";
import { useState } from 'react'

const Register = () => {
    const [registerFields, setRegisterFields] = useState({
        email: "",
        password: "",
        repassword: "",
        firstname: "",
        lastname: ""
    });

    const { values, errors, inputChangeHandler, submitHandler } = RegisterController();

    return (
        <div className="register">
            <InputField
                name="email"
                value={values.email}
                error={errors.email}
                onChange={inputChangeHandler} />
            <InputField
                name="password"
                value={values.password}
                error={errors.password}
                onChange={inputChangeHandler} />
            <InputField
                name="repassword"
                value={values.repassword}
                error={errors.repassword}
                onChange={inputChangeHandler} />
            <InputField
                name="firstname"
                value={values.firstname}
                error={errors.firstname}
                onChange={inputChangeHandler} />
            <InputField
                name="lastname"
                value={values.firstname}
                error={errors.firstname}
                onChange={inputChangeHandler} />
        </div>
    );
}

export default Register;