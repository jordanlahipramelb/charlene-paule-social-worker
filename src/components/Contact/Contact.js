import img from "../../assets/images/logo.png";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";

function Contact() {
	const refForm = useRef();

	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				// "service_ze6tg12",
				// "template_c0aj0tf",
				refForm.current
				// "7mInnB1kJAtct1ix9"
			)
			.then(
				() => {
					alert("Message successfully sent!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send message, please try again.");
				}
			);
	};

	return (
		<div name="contact" className="contact-page">
			<div className="container">
				<div
					className="row text-center"
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-once="true"
				>
					<p className="title">Contact Me</p>
				</div>
				<div className="row">
					<p data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
						Send me an email below and I'll get back to you as soon as possible!
					</p>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div
							className="contact-form"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<form className="row" ref={refForm} onSubmit={sendEmail}>
								<div>
									<input
										type="text"
										name="name"
										placeholder="Name"
										className="form-control"
										required
									/>
								</div>
								<div>
									<input
										placeholder="Your Email"
										type="text"
										name="email"
										className="form-control"
										required
									/>
								</div>
								<div>
									<input
										type="number"
										name="number"
										placeholder="Your Phone Number; Format: 123-456-7890"
										className="form-control"
										required
									/>
								</div>
								<div>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										className="form-control"
										required
									/>
								</div>
								<div>
									<textarea
										placeholder="Tell me why you are seeking help?"
										name="message"
										className="form-control"
										required
									/>
								</div>
								<div className="">
									<input type="submit" className="button-2" value="SEND" />
								</div>
							</form>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div
							className="company"
							data-aos="fade-up"
							data-aos-delay="800"
							data-aos-once="true"
						>
							<div className="image text-center">
								<img src={img} alt="company logo" />
							</div>
							<div className="location ps-5">
								<p className="heading">Location</p>
								<p>1607 East Windmill Lane</p>
								<p>Ste 300</p>
								<p>Las Vegas, NV 89123</p>
								<p>(702) 779-0339</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
