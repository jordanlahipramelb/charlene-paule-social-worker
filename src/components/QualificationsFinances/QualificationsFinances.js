import React from "react";
import img from "../../assets/images/meeting.svg";

function QualificationsFinances() {
	return (
		<div className="qualifications-finances-page">
			<div className="container">
				<h3>Qualifications</h3>
				<ul>
					<li>Years in Practice: 3 Years</li>
					<li>License: Nevada / 9973-C</li>
					<li>School: Rutgers University</li>
					<li>Year Graduated: 2019</li>
				</ul>
				<h3>Finances</h3>
				<p>Office</p>
				<ul>
					<li>Cost per Session: $120 - $150</li>
					<li>
						Pay By: American Express, Cash, Discover, Health Savings Account,
						Mastercard, Zelle
					</li>
				</ul>
				<p>Teletherapy</p>
				<ul>
					<li> Session Fee: $120 per session</li>
					<li>Couples Session Fee: $150 per session</li>
					<li>
						Pay By: American Express, Cash, Discover, Health Savings Account,
						Mastercard, Zelle
					</li>
				</ul>

				<p>Accepted Insurance Plans</p>
				<ul>
					<li>Anthem</li>
					<li>BlueCross and BlueShield</li>
					<li>Cigna and Evernorth</li>
					<li>Medicare</li>
				</ul>

				<img src={img} />
			</div>
		</div>
	);
}

export default QualificationsFinances;
