import menu_3 from "../assets/images/menu-3.jpg";
import menu_5 from "../assets/images/menu-5.jpg";
import menu_7 from "../assets/images/menu-7.jpg";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
const Blog = ({ display_hero = true, display_insta = true }) => {
	//console.log(display_insta);
	const blogs = [
		{
			blog_img: menu_3,
			date: "01",
			month: "January",
			year: "2025",
			comment: "Sed amet tempor amet sit kasd sea lorem",
		},
		{
			blog_img: menu_5,
			date: "02",
			month: "March",
			year: "2025",
			comment: "Sed amet tempor amet sit kasd sea lorem 2",
		},
		{
			blog_img: menu_7,
			date: "01",
			month: "May",
			year: "2025",
			comment: "Sed amet tempor amet sit kasd sea lorem 3",
		},
	];
	return (
		<>
			{display_hero && <Hero display={true} pageName="Blog" />}
			<div className="container-fluid p-5">
				<div
					className="mb-5 text-center wow fadeIn"
					data-wow-delay="0.1s"
					style={{ maxWidth: 700, margin: "auto" }}>
					<h5 className="section-title">Our Blog</h5>
					<h1 className="display-3 mb-0">Latest Articles From Food Blog</h1>
				</div>
				<div className="row g-5">
					{blogs.map((blog) => (
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="blog-item">
								<div className="position-relative overflow-hidden rounded-top">
									<img className="img-fluid" src={blog.blog_img} alt="" />
								</div>
								<div className="bg-dark d-flex align-items-center rounded-bottom p-4">
									<div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
										<span>{blog.date}</span>
										<h6 className="text-primary text-uppercase mb-0">
											{blog.month}
										</h6>
										<span>{blog.year}</span>
									</div>
									<a className="h5 lh-base text-light" href="">
										{blog.comment}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{display_insta && <InstagramFeed display_feed={true} />}
		</>
	);
};

export default Blog;
