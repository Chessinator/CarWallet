import RegisterController from "../../controller/RegisterController";
import Property from "../Property"
import "./Register.css"

const Register = () => {
    const { values, errors, inputChangeHandler, submitHandler } = RegisterController();

    return (
        <div className="register-form row">
            <Property name="First name" id="firstname" value={values.firstname} onChange={inputChangeHandler} disabled={false} error={errors.firstname}/>
            <Property name="Last name" id="lastname" value={values.lastname} onChange={inputChangeHandler} disabled={false} error={errors.lastname}/>
            <Property name="e-Mail" id="email" value={values.email} onChange={inputChangeHandler} disabled={false} error={errors.email}/>
            <Property name="Password" id="password" value={values.password} onChange={inputChangeHandler} disabled={false} error={errors.password}/>
            <Property name="Password (again)" id="repassword" value={values.repassword} onChange={inputChangeHandler} disabled={false} error={errors.repassword}/>
            <button className="register-submit-button btn btn-light row" type="submit" onClick={submitHandler}>
                Register
            </button>
        </div>
    );
}

export default Register;