import "./hamburger.css";
import { MenuIcon } from "@heroicons/react/solid";

export default function Hamburger() {
	function handleLinkTouch(e: any) {
		if (e.target.textContent === "Home") {
			// @ts-ignore: Object is possibly 'null'.
			document.querySelector(".heroes").scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "About") {
			// @ts-ignore: Object is possibly 'null'.
			document.querySelector(".whoami").scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Skills") {
			// @ts-ignore: Object is possibly 'null'.
			document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Projects") {
			// @ts-ignore: Object is possibly 'null'.
			document
				.querySelector(".projects")
				.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Resume") {
			// @ts-ignore: Object is possibly 'null'.
			document
				.querySelector(".experience")
				.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Contact") {
			// @ts-ignore: Object is possibly 'null'.
			document.querySelector(".whoami").scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<nav className="navbarsm">
			<div className="nav-menusm">
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					Home
				</button>
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					About
				</button>
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					Skills
				</button>
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					Projects
				</button>
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					Resume
				</button>
				<button className="nav-itemsm" onClick={handleLinkTouch}>
					Contact
				</button>
			</div>
		</nav>
	);
}
