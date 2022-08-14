import "./mainframe.css";
import Heroes from "../Heroes/Heroes";
import WhoAmI from "../WhoAmI/WhoAmI";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Experiences";

export default function Mainframe() {
	return (
		<div className="Mainframe">
			<Heroes />
			{/* <WhoAmI /> */}
			<Skills />
			<Projects />
		</div>
	);
}
