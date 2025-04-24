const GetInTouch = () => {
	return (
		<>
			<div className="col-lg-4 col-md-12 pt-5 mb-5">
				<h3 className="text-light mb-4">Get In Touch</h3>
				<div className="d-flex mb-2">
					<i className="bi bi-geo-alt text-primary me-2" />
					<p className="mb-0">123 Street, New York, USA</p>
				</div>
				<div className="d-flex mb-2">
					<i className="bi bi-envelope-open text-primary me-2" />
					<p className="mb-0">info@example.com</p>
				</div>
				<div className="d-flex mb-2">
					<i className="bi bi-telephone text-primary me-2" />
					<p className="mb-0">+012 345 67890</p>
				</div>
				<div className="d-flex mt-4">
					<a
						className="btn btn-primary btn-square rounded-circle me-2"
						href="#">
						<i className="fab fa-twitter" />
					</a>
					<a
						className="btn btn-primary btn-square rounded-circle me-2"
						href="#">
						<i className="fab fa-facebook-f" />
					</a>
					<a
						className="btn btn-primary btn-square rounded-circle me-2"
						href="#">
						<i className="fab fa-linkedin-in" />
					</a>
					<a className="btn btn-primary btn-square rounded-circle" href="#">
						<i className="fab fa-instagram" />
					</a>
				</div>
			</div>
		</>
	);
};

export default GetInTouch;
