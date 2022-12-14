import React, { useEffect } from "react";
import AOS from "aos";
import img from "../../assets/images/hands.avif";

function Treatments() {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<div name="treatments" className="treatments-page">
			<div className="container">
				<div className="row">
					<div
						className="col text-center"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-once="true"
					>
						<p className="title mb-4">Treatment Approach</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-6">
						<div
							className="treatments-left"
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-once="true"
						>
							<p className="heading">Types of Therapy</p>
							<ul>
								<li>Acceptance and Commitment (ACT)</li>
								<li>Art Therapy</li>
								<li>Attachment-based</li>
								<li>Cognitive Behavioral (CBT)</li>
								<li>Cognitive Processing (CPT)</li>
								<li>Compassion Focused</li>
								<li>Culturally Sensitive</li>
								<li>Eclectic</li>
								<li>Emotionally Focused</li>
								<li>Humanistic</li>
								<li>Internal Family Systems (IFS)</li>
								<li>Motivational Interviewing</li>
								<li>Person-Centered</li>
								<li>Positive Psychology</li>
								<li>Psychodynamic</li>
								<li>Strength-Based</li>
								<li>Trauma Focused</li>
							</ul>
						</div>
					</div>

					<div className="col-xs-12 col-md-6">
						<div
							className="treatments-right text-center"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<img src={img} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Treatments;
