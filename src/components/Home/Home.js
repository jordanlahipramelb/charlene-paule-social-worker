import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import profileImage from "../../assets/images/char.jpeg";

function Home() {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<div name="home" className="home-page">
			<div className="container">
				<div className="row align-items-center">
					<div
						className="header-left col-xs-12 col-md-6 text-center"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-once="true"
					>
						<img src={profileImage} alt="Profile Image" className="pb-3" />
					</div>

					<div
						className="header-right col text-center"
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-once="true"
					>
						<h1>Hi! I am Charlene Paule</h1>
						<p>Clinical Social Work/Therapist, LCSW</p>

						<div className="header-buttons">
							<div className="row">
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<Link
										to="about"
										spy={true}
										smooth={true}
										offset={5}
										duration={300}
										className="button flex-fill"
									>
										About Me
									</Link>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<Link
										to="specialties"
										spy={true}
										smooth={true}
										offset={5}
										duration={300}
										className="button flex-fill"
									>
										Specialties
									</Link>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<Link
										to="qualifications-finances"
										spy={true}
										smooth={true}
										offset={5}
										duration={300}
										className="button flex-fill"
									>
										Finances
									</Link>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<Link
										to="treatments"
										spy={true}
										smooth={true}
										offset={5}
										duration={300}
										className="button flex-fill"
									>
										Treatments
									</Link>
								</div>
							</div>

							<div className="col-xs-12 d-flex">
								<Link
									to="contact"
									spy={true}
									smooth={true}
									offset={5}
									duration={300}
									className="button flex-fill"
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
