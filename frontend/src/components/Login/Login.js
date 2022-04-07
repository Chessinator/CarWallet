import { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css';
import { userLogin } from '../../redux/action/user/User';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const attemptLogin =  async (event) => {
        event.preventDefault(); 
        await dispatch(userLogin({email: email,password: password}));
    }  

    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={attemptLogin}>
                <img className="mb-4" src={require('../../assets/images/logo.svg').default} alt="" width="72" height="57" />
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
};




export default Login;