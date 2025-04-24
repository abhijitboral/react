import React, { useState, useEffect } from "react";
function AnimatedCounter({
	target = 100,
	duration = 2000,
	heading = "",
	icon = "",
}) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let start = 0;
		const increment = target / (duration / 16);
		const interval = setInterval(() => {
			start += increment;
			if (start >= target) {
				clearInterval(interval);
				setCount;
			} else {
				setCount(Math.floor(start));
			}
		}, 16);
		return () => clearInterval(interval);
	}, [target, duration]);
	return (
		<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
			<div className="d-flex">
				<div
					className="rounded-circle d-flex align-items-center justify-content-center mb-3"
					style={{ width: 80, height: 80, background: "#111111" }}>
					<i className={`fa ${icon} fs-4 text-primary`} />
				</div>
				<div className="ps-4">
					<h5 className="text-white">{heading}</h5>
					<h1
						className="display-5 text-secondary mb-0"
						data-toggle="counter-up">
						{count}
					</h1>
				</div>
			</div>
		</div>
	);
}
export default AnimatedCounter;
