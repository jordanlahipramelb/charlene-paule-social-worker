import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Specialties from "./components/Specialties/Specialties";
import Treatments from "./components/Treatments/Treatments";
import QualificationsFinances from "./components/QualificationsFinances/QualificationsFinances";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Specialties />
			<Treatments />
			<QualificationsFinances />
			{/* <Contact /> */}
		</>
	);
}

export default App;
