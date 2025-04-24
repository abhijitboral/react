import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu_1 from "../assets/images/menu-1.jpg";
import menu_2 from "../assets/images/menu-2.jpg";
import menu_3 from "../assets/images/menu-3.jpg";
import menu_4 from "../assets/images/menu-4.jpg";
import menu_5 from "../assets/images/menu-5.jpg";
import menu_6 from "../assets/images/menu-6.jpg";
import menu_7 from "../assets/images/menu-7.jpg";
import menu_8 from "../assets/images/menu-8.jpg";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
const Menu = ({ display_hero = true, display_insta = true }) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const listItem = document.getElementById("Breakfast");
		if (listItem) {
			listItem.classList.add("active");
		}
	}, []);
	const handleClick = (tab_name) => {
		if (tab_name === isActive) setIsActive(true);
	};
	const tabs = [
		{
			tab_name: "Breakfast",
		},
		{
			tab_name: "Launch",
		},
		{
			tab_name: "Dinner",
		},
	];
	const breakfast_menus = [
		{
			menu_img: menu_1,
			menu_name: "BBQ Chicken",
		},
		{
			menu_img: menu_2,
			menu_name: "BBQ Chicken 2",
		},
		{
			menu_img: menu_3,
			menu_name: "BBQ Chicken 3",
		},
		{
			menu_img: menu_4,
			menu_name: "BBQ Chicken 4",
		},
		{
			menu_img: menu_5,
			menu_name: "BBQ Chicken 5",
		},
		{
			menu_img: menu_6,
			menu_name: "BBQ Chicken 6",
		},
		{
			menu_img: menu_7,
			menu_name: "BBQ Chicken 7",
		},
		{
			menu_img: menu_8,
			menu_name: "BBQ Chicken 8",
		},
	];
	return (
		<>
			{display_hero && <Hero display={true} pageName="Menu" />}
			<div className="container-fluid menu py-5 px-0">
				<div
					className="mb-5 text-center wow fadeIn"
					data-wow-delay="0.1s"
					style={{ maxWidth: 700, margin: "auto" }}>
					<h5 className="section-title">Our Menu</h5>
					<h1 className="display-3 mb-0">Hands Craft More Than Meals</h1>
				</div>
				<div className="tab-class text-center">
					<ul
						className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5 wow fadeIn"
						data-wow-delay="0.2s">
						{tabs.map((tab, index) => (
							<li className="nav-item">
								<Link
									className={`nav-link rounded-pill text-white ${
										isActive ? "active" : ""
									}`}
									data-bs-toggle="pill"
									to={`#tab-${index + 1}`}
									id={tab.tab_name}
									onClick={() => handleClick(tab.tab_name)}>
									{tab.tab_name}
								</Link>
							</li>
						))}
					</ul>
					<div className="tab-content">
						<div id="tab-1" className="tab-pane fade show p-0 active">
							<div className="row g-0">
								{breakfast_menus.map((breakfast_menu) => (
									<div
										className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
										data-wow-delay="0.1s">
										<div className="position-relative">
											<img
												className="img-fluid"
												src={breakfast_menu.menu_img}
												alt=""
											/>
											<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
												{breakfast_menu.menu_name}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div id="tab-2" className="tab-pane fade p-0">
							<div className="row g-0">
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_2} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_3} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_4} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_5} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_6} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_7} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_8} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_2} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="tab-3" className="tab-pane fade p-0">
							<div className="row g-0">
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_3} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_4} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_5} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_6} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_7} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_8} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_1} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="position-relative">
										<img className="img-fluid" src={menu_2} alt="" />
										<div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
											BBQ Chicken
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{display_insta && <InstagramFeed display_feed={true} />}
		</>
	);
};

export default Menu;
