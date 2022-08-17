import Project from "./Project";
import "./projects.css";
import pp from "../assets/profile-picture.png";

export default function Projects() {
	return (
		<div className="projects">
			Project
			<span
				style={{
					color: "white",
					backgroundColor: "var(--primary-color)",
					borderRadius: 4,
					padding: 3,
					margin: 3,
				}}
			>
				s
			</span>
			<div className="project-container">
				<Project
					logo={pp}
					title="Tenzies Game"
					madeWith="React, Javascript, CSS"
					description="Roll the dice, hold die to match all the dice"
					gif="https://media.giphy.com/media/KaMiJyanP9IbdJLZ6F/giphy.gif"
					demo="https://tenzies-game-olive.vercel.app/"
					github="https://github.com/will-flores1/tenzies-game"
				/>
				<Project
					logo={pp}
					title="Minimalist Portfolio"
					madeWith="React, Typescript, Tailwindcss"
					description="Minimal portfolio. Used responsive design, tailwindcss, and light/dark mode. Design inspired by Takuya Matsuyama"
					gif="https://media.giphy.com/media/ZjCBYlg1uDtdUdbeYr/giphy.gif"
					demo="https://portfolio-too.vercel.app/"
					github="https://github.com/will-flores1/portfolio-too"
				/>
				<Project
					logo={pp}
					title="WebChat Landing Page"
					madeWith="Figma & Webflow CMS"
					description="Landing page for an imaginary web application. Designed using graphic design concepts like layout, typography, hierarchy, and design tricks"
					gif="https://media.giphy.com/media/Nba1yMXJPXrCHNIn6A/giphy.gif"
					demo="https://wils-stunning-project.webflow.io/"
				/>
				{/* <Project
					logo={pp}
					title="Portfolio"
					madeWith="React, Typescript, Tailwindcss"
					description="Portfolio. Used interactive NavBar, responsive design, pure CSS, and pizzazz."
					gif="https://media.giphy.com/media/AYziFcIOwC3HEmv2HC/giphy.gif"
					demo="https://www.wilfredoflores.dev/"
					github="https://github.com/will-flores1/portfolio"
				/> */}
			</div>
		</div>
	);
}
