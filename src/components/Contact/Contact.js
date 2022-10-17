import React from "react";
import CompanyLogo from "../../assets/images/logo.png";

function Contact() {
	return (
		<div className="contact-page">
			<div className="container">
				<h1>Contact Me</h1>
				<div className="contact-form">
					<form className="row">
						<div
							className="col-md-6"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="form-control"
								required
							/>
						</div>
						<div
							className="col-md-6"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<input
								placeholder="Subject"
								type="text"
								name="subject"
								className="form-control"
								required
							/>
						</div>
						<div
							className="col-12"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="form-control"
								required
							/>
						</div>
						<div
							className="col-12"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<textarea
								placeholder="Message"
								name="message"
								className="form-control"
								required
							/>
						</div>
						<div className="col-12">
							<input type="submit" className="flat-button" value="SEND" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
