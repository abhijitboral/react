import { Link } from "react-router-dom";
const MoreLinks = () => {
	const quickMenuLinks = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About Us",
			link: "/about",
		},
		{
			name: "Food Menu",
			link: "/menu",
		},
		{
			name: "Our Chefs",
			link: "/team",
		},
		{
			name: "Latest Blog",
			link: "/blog",
		},
		{
			name: "Contact Us",
			link: "/contact",
		},
	];
	return (
		<>
			<div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
				<h3 className="text-light mb-4">More Links</h3>
				<div className="d-flex flex-column justify-content-start">
					{quickMenuLinks.map((quickMenuLink) => (
						<Link className="text-secondary mb-2" to={quickMenuLink.link}>
							<i className="bi bi-arrow-right text-primary me-2" />
							{quickMenuLink.name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default MoreLinks;
