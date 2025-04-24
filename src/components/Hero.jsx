const Hero = ({ pageName, display }) => {
	//console.log(display, pageName);
	return (
		<>
			{display && (
				<div className="container-fluid p-5 mb-5 bg-dark text-secondary">
					<div className="container wow fadeIn" data-wow-delay="0.1s">
						<h1 className="display-1 text-secondary text-center mb-0">
							{pageName}
						</h1>
					</div>
				</div>
			)}
		</>
	);
};

export default Hero;
