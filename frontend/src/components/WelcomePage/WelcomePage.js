import { NavLink } from "react-router-dom";
import "./WelcomePage.css"

const WelcomePage = () => {


    return (
        <div className="welcome-page">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-preview">
                            <h2 className="post-title">One central place to manage all your vehicles</h2>
                            <h3 className="post-subtitle">Forget all your papers</h3>
                        </div>
                        <hr className="my-4" />
                        <div className="post-preview">
                            <h2 className="post-title">Find Servicepartner that fits your needs</h2>
                            <h3 className="post-subtitle">And book the services via App</h3>
                        </div>
                        <hr className="my-4" />
                        <div className="post-preview">
                            <h2 className="post-title">All Informations in one place</h2>
                            <h3 className="post-subtitle">blablabla</h3>
                        </div>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;