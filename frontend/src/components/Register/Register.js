import InputField from "../InputField/"
import RegisterController from "../../controller/RegisterController";
import "./Register.css"

const Register = () => {
    const { values, errors, inputChangeHandler, submitHandler } = RegisterController();

    return (
        <div className="register">
            <InputField
                name="firstname"
                value={values.firstname}
                error={errors.firstname}
                onChange={inputChangeHandler} />
            <InputField
                name="lastname"
                value={values.lastname}
                error={errors.lastname}
                onChange={inputChangeHandler} />
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
            <button className="register-submit-button" type="submit" onClick={submitHandler}>
                Register
            </button>
        </div>
    );
}

export default Register;