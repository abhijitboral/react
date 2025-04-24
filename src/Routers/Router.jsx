import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Feature from "../components/Feature";
import Page404 from "../components/404";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Home from "../components/Home";

const MyRouter = () => {
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
export default MyRouter;
