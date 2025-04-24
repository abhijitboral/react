import menu_2 from "../assets/images/menu-2.jpg";
import menu_3 from "../assets/images/menu-3.jpg";
import menu_4 from "../assets/images/menu-4.jpg";
import menu_5 from "../assets/images/menu-5.jpg";
import menu_6 from "../assets/images/menu-6.jpg";
import menu_7 from "../assets/images/menu-7.jpg";

const InstagramFeed = ({ display_feed }) => {
	return (
		<>
			{display_feed && (
				<div className="container-fluid position-relative instagram p-0 mt-5">
					<a
						href=""
						className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle bg-white rounded-circle"
						style={{ width: 100, height: 100, zIndex: 1 }}>
						<i className="fab fa-instagram fa-2x text-secondary" />
					</a>
					<div className="row g-0">
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.1s">
							<img className="img-fluid" src={menu_2} alt="" />
						</div>
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.2s">
							<img className="img-fluid" src={menu_3} alt="" />
						</div>
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.3s">
							<img className="img-fluid" src={menu_4} alt="" />
						</div>
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.4s">
							<img className="img-fluid" src={menu_5} alt="" />
						</div>
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.5s">
							<img className="img-fluid" src={menu_6} alt="" />
						</div>
						<div
							className="col-lg-2 col-md-3 col-sm-4 wow fadeIn"
							data-wow-delay="0.6s">
							<img className="img-fluid" src={menu_7} alt="" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default InstagramFeed;
