import "./navbar.css";

function NavBar() {
	function handleLinkTouch(e: any) {
		if (e.target.textContent === "Home") {
			document.querySelector(".heroes")!.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "About") {
			document.querySelector(".whoami")!.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Skills") {
			document.querySelector(".skills")!.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Projects") {
			document
				.querySelector(".projects")!
				.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Experience") {
			document
				.querySelector(".experience")!
				.scrollIntoView({ behavior: "smooth" });
		} else if (e.target.textContent === "Contact") {
			document.querySelector(".whoami")!.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<div id="nav-group">
			<button className="nav-item" onClick={handleLinkTouch}>
				Home
			</button>
			<button className="nav-item" onClick={handleLinkTouch}>
				About
			</button>
			<button className="nav-item" onClick={handleLinkTouch}>
				Skills
			</button>
			<button className="nav-item" onClick={handleLinkTouch}>
				Projects
			</button>
			<button className="nav-item" onClick={handleLinkTouch}>
				Experience
			</button>
			<button className="nav-item" onClick={handleLinkTouch}>
				Contact
			</button>
		</div>
	);
}
export default NavBar;
