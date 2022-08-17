import "./mainframe.css";
import Heroes from "../Heroes/Heroes";
import WhoAmI from "../WhoAmI/WhoAmI";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

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
