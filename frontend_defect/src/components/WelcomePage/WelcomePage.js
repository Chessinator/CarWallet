import { NavLink } from "react-router-dom";
import './WelcomePage.css'


const WelcomePage = () => {


    return (
        <div className="landing-page">

            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">CarWallet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu

                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <NavLink className="nav-item" to="/login"><a className="nav-link px-lg-3 py-3 py-lg-4" >Login</a></NavLink>
                            <NavLink className="nav-item" to="/register"><a className="nav-link px-lg-3 py-3 py-lg-4" >Sign Up</a></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead" >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>CarWallet</h1>
                                <span className="subheading">The future is here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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