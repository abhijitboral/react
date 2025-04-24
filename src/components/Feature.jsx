import { Link } from "react-router-dom";

import feature_1 from "../assets/images/feature-1.png";
import feature_2 from "../assets/images/feature-2.png";
import feature_3 from "../assets/images/feature-3.png";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
const Feature = ({ display_hero = true, display_insta = true }) => {
	return (
		<>
			{display_hero && <Hero display={true} pageName="Feture" />}
			<div className="container-fluid feature position-relative p-5 pb-0 mt-5">
				<div className="row g-5 gb-5">
					<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
						<div className="feature-item rounded text-center p-5">
							<img
								className="img-fluid bg-white rounded-circle"
								src={feature_1}
								style={{ width: 150, height: 150 }}
							/>
							<h3 className="my-4">Best Chef</h3>
							<p className="text-light">
								Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
								amet kasd elitr duo vero amet amet stet
							</p>
							<a className="font-body" style={{ letterSpacing: 1 }} href="">
								Read More <i className="bi bi-arrow-right" />
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
						<div className="feature-item rounded text-center p-5">
							<img
								className="img-fluid bg-white rounded-circle"
								src={feature_2}
								style={{ width: 150, height: 150 }}
							/>
							<h3 className="my-4">Menu Variations</h3>
							<p className="text-light">
								Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
								amet kasd elitr duo vero amet amet stet
							</p>
							<a className="font-body" style={{ letterSpacing: 1 }} href="">
								Read More <i className="bi bi-arrow-right" />
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
						<div className="feature-item rounded text-center p-5">
							<img
								className="img-fluid bg-white rounded-circle"
								src={feature_3}
								style={{ width: 150, height: 150 }}
							/>
							<h3 className="my-4">Healthy Food</h3>
							<p className="text-light">
								Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
								amet kasd elitr duo vero amet amet stet
							</p>
							<a className="font-body" style={{ letterSpacing: 1 }} href="">
								Read More <i className="bi bi-arrow-right" />
							</a>
						</div>
					</div>
					<div
						className="col-lg-12 col-md-6 text-center wow fadeIn"
						data-wow-delay="0.1s">
						<h1 className="display-4 text-secondary mb-4">
							<span className="text-primary">30% Discount</span>
							<br /> For This Summer
						</h1>
						<a href="" className="btn btn-primary py-3 px-5">
							Order Now
						</a>
					</div>
				</div>
			</div>
			{display_insta && <InstagramFeed display_feed={true} />}
		</>
	);
};

export default Feature;
