import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		//setIsActive(!isActive);
	};
	return (
		<>
			{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">My Site</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dasboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                            </ul>
                            </li>
                        </  ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
			<div className="container-fluid bg-dark px-0">
				<div className="row gx-0 wow fadeIn" data-wow-delay="0.1s">
					<div className="col-lg-3 bg-primary d-none d-lg-block">
						<NavLink
							to="/"
							className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
							<h1 className="m-0 display-4 text-white text-uppercase">
								Chefer
							</h1>
						</NavLink>
					</div>
					<div className="col-lg-9">
						<div className="row gx-0 d-none d-lg-flex bg-dark">
							<div className="col-6 px-5 text-start">
								<div className="h-100 d-inline-flex align-items-center py-2 me-4">
									<i className="fa fa-envelope text-primary me-2" />
									<p className="mb-0">info@example.com</p>
								</div>
							</div>
							<div className="col-6 px-5 text-end">
								<div className="h-100 d-inline-flex align-items-center py-2">
									<i className="fa fa-phone-alt text-primary me-2" />
									<p className="mb-0">+012 345 6789</p>
								</div>
							</div>
						</div>
						<nav
							className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0 px-lg-5"
							style={{ background: "#111111" }}>
							<NavLink to="/" className="navbar-brand d-block d-lg-none">
								<h1 className="m-0 display-4 text-primary text-uppercase">
									Chefer
								</h1>
							</NavLink>
							<button
								type="button"
								className="navbar-toggler"
								data-bs-toggle="collapse"
								data-bs-target="#navbarCollapse">
								<span className="navbar-toggler-icon" />
							</button>
							<div
								className="collapse navbar-collapse justify-content-between"
								id="navbarCollapse">
								<div className="navbar-nav mr-auto py-0">
									<NavLink
										to="/"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Home
									</NavLink>
									<NavLink
										to="/about"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										About
									</NavLink>
									<NavLink
										to="/menu"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Menu
									</NavLink>
									<NavLink
										to="/team"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Chefs
									</NavLink>
									<NavLink
										to="/feature"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Features
									</NavLink>
									<NavLink
										to="/blog"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Blog Post
									</NavLink>
									<NavLink
										to="/testimonial"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Testimonial
									</NavLink>

									{/* <div className="nav-item dropdown">
                                            <NavLink
                                            to="#"
                                            className="nav-link dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            >
                                            Pages
                                            </NavLink>
                                            <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="feature" className="dropdown-item">
                                                Features
                                            </NavLink>
                                            <NavLink to="blog" className="dropdown-item">
                                                Blog Post
                                            </NavLink>
                                            <NavLink to="testimonial" className="dropdown-item">
                                                Testimonial
                                            </NavLink>
                                            <NavLink to="404" className="dropdown-item">
                                                404 Error
                                            </NavLink>
                                            </div>
                                        </div> */}
									<NavLink
										to="/contact"
										className={`nav-item nav-link ${isActive ? "active" : ""}`}>
										Contact
									</NavLink>
								</div>
								<div className="d-none d-lg-flex align-items-center py-2">
									<NavLink
										className="btn btn-outline-secondary btn-square rounded-circle ms-2"
										to="">
										<i className="fab fa-facebook-f" />
									</NavLink>
									<NavLink
										className="btn btn-outline-secondary btn-square rounded-circle ms-2"
										to="">
										<i className="fab fa-twitter" />
									</NavLink>
									<NavLink
										className="btn btn-outline-secondary btn-square rounded-circle ms-2"
										to="">
										<i className="fab fa-linkedin-in" />
									</NavLink>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navbar;
