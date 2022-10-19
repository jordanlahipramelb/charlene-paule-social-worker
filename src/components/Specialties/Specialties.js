import React, { useEffect } from "react";
import AOS from "aos";
import img from "../../assets/images/happy.svg";

function Specialties() {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<div name="specialties" className="specialties-page">
			<div className="container">
				<div className="row">
					<div
						className="col text-center"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-once="true"
					>
						<img src={img} className="mb-4" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 col-lg-6">
						<div
							className="specialties"
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-once="true"
						>
							<div className="row">
								<p className="title">Specialties</p>
								<p className="subheading">Issues</p>
								<div className="col-6">
									<ul>
										<li>Anger Management</li>
										<li>Anxiety</li>
										<li>Bipolar Disorder</li>
										<li>Coping Skills</li>
										<li>Depression</li>
										<li>Emotional Disturbance</li>
										<li>Grief</li>
										<li>Life Transitions</li>
										<li>Peer Relationships</li>
										<li>Racial Identity</li>
										<li>School Issues</li>
									</ul>
								</div>
								<div className="col-6">
									<ul>
										<li>Self Esteem</li>
										<li>Self-Harming</li>
										<li>Sexual Abuse</li>
										<li>Spirituality</li>
										<li>Stress</li>
										<li>Suicidal Ideation</li>
										<li>Transgender</li>
										<li>Trauma and PTSD</li>
									</ul>
								</div>

								<div className="row">
									<div className="col">
										<p className="subheading">Mental Health</p>
										<ul>
											<li>Mood Disorders</li>
										</ul>
									</div>
									<div className="col">
										<p className="subheading">Sexuality</p>
										<ul>
											<li>LGBTQ+</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-6">
						<div
							className="client-focus"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<div className="row">
								<p className="title">Client Focus</p>

								<div className="col">
									<p className="subheading">Age</p>
									<ul>
										<li>Adults</li>
										<li>Teens</li>
										<li>Preteen</li>
									</ul>
								</div>
								<div className="col">
									<p className="subheading">Communities</p>
									<ul>
										<li>Non-Binary Allied</li>
										<li>Queer Allied</li>
										<li>Transgender Allied</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Specialties;
