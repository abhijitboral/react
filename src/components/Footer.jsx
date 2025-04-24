import GetInTouch from "./GetInTouch";
import MoreLinks from "./MoreLinks";
import Newsletter from "./Newsletter";
import QuickLinks from "./QuickLinks";

const Footer = () => {
	return (
		<>
			<div className="container-fluid bg-dark text-secondary px-5">
				<div className="row gx-5 wow fadeIn" data-wow-delay="0.1s">
					<div className="col-lg-8 col-md-6">
						<div className="row gx-5">
							<GetInTouch />
							<QuickLinks />
							<MoreLinks />
						</div>
					</div>
					<Newsletter />
				</div>
			</div>
			<div
				className="container-fluid py-4 py-lg-0 px-5"
				style={{ background: "#111111" }}>
				<div className="row gx-5">
					<div className="col-lg-8">
						<div className="py-lg-4 text-center">
							<p className="text-secondary mb-0">
								©{" "}
								<a className="text-light fw-bold" href="#">
									Your Site Name
								</a>
								. All Rights Reserved.
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="py-lg-4 text-center credit">
							{/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
							{/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
							{/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
							<p className="text-light mb-0">
								Designed by{" "}
								<a className="text-light fw-bold" href="https://htmlcodex.com">
									Abhijit Boral
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
