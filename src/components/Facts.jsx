import AnimatedCounter from "./AnimatedCounter";

const Facts = () => {
	return (
		<>
			<div className="container-fluid bg-dark facts p-5 my-5">
				<div className="row gx-5 gy-4 py-5">
					<AnimatedCounter
						target={150}
						duration={3000}
						heading="Years"
						icon="fa-star"
					/>
					<AnimatedCounter
						target={250}
						duration={3000}
						heading="Clients"
						icon="fa-users"
					/>
					<AnimatedCounter
						target={350}
						duration={3000}
						heading="Awards"
						icon="fa-check"
					/>
					<AnimatedCounter
						target={450}
						duration={3000}
						heading="Events"
						icon="fa-mug-hot"
					/>
				</div>
			</div>
		</>
	);
};

export default Facts;
