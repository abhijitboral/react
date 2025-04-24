/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import "./assets/lib/animate/animate.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Dashboard from "./components/Dashboard";
//import SignupForm from "./components/SignupForm";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";
import Page404 from "./components/404";

//import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
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
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
