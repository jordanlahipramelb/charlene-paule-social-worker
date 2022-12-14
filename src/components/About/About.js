import React, { useEffect } from "react";
import AOS from "aos";
import img from "../../assets/images/woman.svg";

function About() {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<div name="about" className="about-page">
			<div className="container">
				<div className="row">
					<div
						className="col text-center"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-once="true"
					>
						<p className="title mb-4">About Me</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-6 text-center">
						<div
							className="about-left my-2"
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-once="true"
						>
							<img src={img} />
						</div>
					</div>

					<div className="col-xs-12 col-md-6">
						<div
							className="about-right"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<p>
								I typically work with people who are struggling with depression,
								anxiety, unstable mood, trauma, self-esteem, identity, life
								changes/transitions, communication, and difficulty expressing
								their feelings. I pull skills and ideas from multiple modalities
								to help you figure out what works best for you.
							</p>
							<p>
								I work with preteens, teens, young adults, and the LGBTQIA+
								community, but I have worked in multiple settings, including the
								school, groups, substance use treatment, and drug court
								programs. Sessions with me typically look like a conversation
								that may naturally lead to processing thoughts and emotions in a
								deeper way.
							</p>
							<p>
								One of the biggest things people are looking for when they come
								to therapy is a safe space to talk freely without being judged.
								I’ll work with you in finding a style that works best and makes
								you feel the most comfortable and heard — I’ll meet you right
								where you’re at!
							</p>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
