import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Mock from "../../Mock";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mock = useContext(Mock);

    const navigate = useNavigate();

    const attemptLogin = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/login", requestOptions)
            .then(response => response.text())
            .then(data => console.log("Data: ", data))
            .then(data => mock.token = {
                access: data.access_token,
                refresh: data.refresh_token
            })
            .then(_data => console.log("token: ", mock.token))
            .then(_data => navigate("../dashboard"))
            .catch(error => console.log("ERROR: ", error));
    }

    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={attemptLogin}>
                <img className="mb-4" src={require('../../logo.svg').default} alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>
        </div>
    )
}
export default Login;