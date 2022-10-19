import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);

	return (
		<nav className="fixed-top px-4 d-flex justify-content-between align-items-center">
			<div className="d-md-flex">
				<p className="logo">CP</p>
			</div>

			{/* Hamburger Icon */}
			<div onClick={handleNav} className="hamburger d-md-none">
				{!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>

			{/* Menu */}
			<ul className="menu d-none d-md-flex">
				<Link to="home" spy={true} smooth={true} offset={50} duration={300}>
					Home
				</Link>
				<Link to="about" spy={true} smooth={true} offset={50} duration={300}>
					About Me
				</Link>
				<Link
					to="specialties"
					spy={true}
					smooth={true}
					offset={50}
					duration={300}
				>
					Specialties
				</Link>
				<Link
					to="treatments"
					spy={true}
					smooth={true}
					offset={50}
					duration={300}
				>
					Treatments
				</Link>
				<Link
					to="qualifications-finances"
					spy={true}
					smooth={true}
					offset={50}
					duration={300}
				>
					Finances
				</Link>
				<Link to="contact" spy={true} smooth={true} offset={50} duration={300}>
					Contact
				</Link>
			</ul>

			{/* Mobile Menu */}
			<div className={!nav ? "d-none" : "mobile-menu"} onClick={handleNav}>
				<div className="mobile-container">
					<ul>
						<Link
							to="home"
							spy={true}
							smooth={true}
							offset={15}
							duration={300}
							onClick={handleNav}
						>
							Home
						</Link>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={5}
							duration={300}
							onClick={handleNav}
						>
							About Me
						</Link>
						<Link
							to="specialties"
							spy={true}
							smooth={true}
							offset={5}
							duration={300}
							onClick={handleNav}
						>
							Specialties
						</Link>
						<Link
							to="treatments"
							spy={true}
							smooth={true}
							offset={5}
							duration={300}
							onClick={handleNav}
						>
							Treatments
						</Link>
						<Link
							to="qualifications-finances"
							spy={true}
							smooth={true}
							offset={5}
							duration={300}
							onClick={handleNav}
						>
							Finances
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={5}
							duration={300}
							onClick={handleNav}
						>
							Contact
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
