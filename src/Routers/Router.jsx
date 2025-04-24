import { BrowserRouter, Routes, Route } from "react-router-dom";

const myRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/team" element={<Team />} />
				<Route path="/testimonial" element={<Testimonial />} />
				<Route path="/feature" element={<Feature />} />
				<Route path="/*" element={<Page404 />} />
			</Route>
		</Routes>
	);
};
export default myRouter;
