import RegisterInputField from "../RegisterInputField/"
import RegisterController from "../../controller/RegisterController";
import "./Register.css"

const Register = () => {
    const { values, errors, inputChangeHandler, submitHandler } = RegisterController();

    return (
        <div className="register row">
            <RegisterInputField
                name="firstname"
                value={values.firstname}
                error={errors.firstname}
                onChange={inputChangeHandler} />
            <RegisterInputField
                name="lastname"
                value={values.lastname}
                error={errors.lastname}
                onChange={inputChangeHandler} />
            <RegisterInputField
                name="email"
                value={values.email}
                error={errors.email}
                onChange={inputChangeHandler} />
            <RegisterInputField
                name="password"
                value={values.password}
                error={errors.password}
                onChange={inputChangeHandler} />
            <RegisterInputField
                name="repassword"
                value={values.repassword}
                error={errors.repassword}
                onChange={inputChangeHandler} />
            <button className="register-submit-button btn btn-light row" type="submit" onClick={submitHandler}>
                Register
            </button>
        </div>
    );
}

export default Register;