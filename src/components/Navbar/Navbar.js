import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);

	return (
		<nav className="fixed-top px-4">
			<div className="d-md-flex">
				<p className="logo">CP</p>
			</div>

			{/* Hamburger Icon */}
			<div onClick={handleNav} className="hamburger d-md-none">
				{!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>

			{/* Menu */}
			<ul className="menu d-none d-md-flex">
				<li>Home</li>
				<li>About Me</li>
				<li>Specialties</li>
				<li>Treatments</li>
				<li>Contact</li>
			</ul>

			{/* Mobile Menu */}
			<div className={!nav ? "d-none" : "mobile-menu"} onClick={handleNav}>
				<div className="mobile-container">
					<ul>
						<li>HOME</li>
						<li>ABOUT ME</li>
						<li>SPECIALTIES</li>
						<li>TREATMENTS</li>
						<li>CONTACT</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
