import React from "react";
import img from "../../assets/images/logo.png";

function Contact() {
	return (
		<div className="contact-page">
			<div className="container">
				<h1>Contact Me</h1>
				<div className="contact-form">
					<form className="row">
						<div
							className=""
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
							className=""
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<input
								placeholder="Your Email"
								type="text"
								name="email"
								className="form-control"
								required
							/>
						</div>
						<div
							className=""
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<input
								type="number"
								name="number"
								placeholder="Your Phone Number; Format: 123-456-7890"
								className="form-control"
								required
							/>
						</div>
						<div
							className=""
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<textarea
								placeholder="Tell me why you are seeking help?"
								name="message"
								className="form-control"
								required
							/>
						</div>
						<div className="col-12">
							<input type="submit" className="button-2" value="SEND" />
						</div>
					</form>
				</div>
				<div className="logo">
					<img src={img} alt="compnay-logo" />
				</div>
			</div>
		</div>
	);
}

export default Contact;
