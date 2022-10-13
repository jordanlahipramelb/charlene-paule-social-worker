import React from "react";
import profileImage from "../../assets/images/char.jpeg";

function Home() {
	return (
		<div className="home-page">
			<div className="container">
				<div className="row align-items-center">
					<div className="header-left col-xs-12 col-md-6 text-center">
						<img src={profileImage} alt="Profile Image" className="pb-3" />
					</div>

					<div className="header-right col text-center">
						<h1>Hi! I am Charlene Paule</h1>
						<p>Clinical Social Work/Therapist, LCSW</p>

						<div className="header-buttons">
							<div className="row">
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<button className="button flex-fill">About Me</button>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<button className="button flex-fill">Specialties</button>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<button className="button flex-fill">Qualifications</button>
								</div>
								<div className="col-xs-12 col-md-12 col-lg-6 d-flex">
									<button className="button flex-fill">Treatments</button>
								</div>
							</div>

							<div className="col-xs-12 d-flex">
								<button className="button flex-fill">Contact</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
