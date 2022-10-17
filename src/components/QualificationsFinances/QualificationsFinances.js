import React from "react";
import img from "../../assets/images/meeting.svg";

function QualificationsFinances() {
	return (
		<div className="qualifications-finances-page">
			<div className="container">
				<div className="clearfix">
					<div className="qualifications">
						<p className="title">Qualifications</p>
						<ul>
							<li>Years in Practice: 3 Years</li>
							<li>License: Nevada / 9973-C</li>
							<li>School: Rutgers University</li>
							<li>Year Graduated: 2019</li>
						</ul>
					</div>
					<div className="image text-center">
						<img src={img} class="col-md-6 float-md-end mb-3 ms-md-3" />
					</div>

					<div className="finances">
						<p className="title">Finances</p>
						<p className="heading">Office</p>
						<ul>
							<li>Cost per Session: $120 - $150</li>
							<li>
								Pay By: American Express, Cash, Discover, Health Savings
								Account, Mastercard, Zelle
							</li>
						</ul>
						<p className="heading">Teletherapy</p>
						<ul>
							<li> Session Fee: $120 per session</li>
							<li>Couples Session Fee: $150 per session</li>
							<li>
								Pay By: American Express, Cash, Discover, Health Savings
								Account, Mastercard, Zelle
							</li>
						</ul>

						<p className="heading">Accepted Insurance Plans</p>
						<ul>
							<li>Anthem</li>
							<li>BlueCross and BlueShield</li>
							<li>Cigna and Evernorth</li>
							<li>Medicare</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QualificationsFinances;
