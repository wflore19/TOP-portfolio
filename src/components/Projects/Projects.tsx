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
			<Project
				logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"
				title="Twitter 2.0"
				madeWith="Next.js, React, Typescript, Sanity, GROQ, Tailwindcss"
				description="A clone of Twitter. Used responsive design and layout, Twitter API, Server Side Rendering, data fetching, sessions, querying, NextAuth, and a timeline widget. Ability to tweet, sign in, and comment."
				gif="https://media.giphy.com/media/tSOPUnPzbxAUVZsUjt/giphy.gif"
				demo="https://twitter-2-0-nu.vercel.app/"
				github="https://github.com/will-flores1/twitter-2.0"
			/>
			<Project
				logo="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
				title="Medium 2.0"
				madeWith="Next.js, React, Typescript, Sanity, GROQ,  Tailwindcss"
				description="A clone of Medium. Used Server Side Rendering, data fetching, custom API, form validation, querying, responsive grid layout, and dynamic routes. Ability to blog using Sanity CMS, and comment checked by form validation."
				gif="https://media.giphy.com/media/meblGF6wWnHssANkdg/giphy.gif"
				demo="https://medium-2-0-sooty.vercel.app/"
				github="https://github.com/will-flores1/medium-2.0"
			/>
			<Project
				logo={pp}
				title="Tenzies Game"
				madeWith="React"
				description="Roll the dice, hold die to match all the dice"
				gif="https://media.giphy.com/media/KaMiJyanP9IbdJLZ6F/giphy.gif"
				demo="https://tenzies-game-olive.vercel.app/"
				github="https://github.com/will-flores1/tenzies-game"
			/>
			<Project
				logo={pp}
				title="WebChat Landing Page"
				madeWith="Figma & Webflow CMS"
				description="Landing page for an imaginary web application. Designed using graphic design concepts like layout, typography, hierarchy, and design tricks"
				gif="https://media.giphy.com/media/Nba1yMXJPXrCHNIn6A/giphy.gif"
				demo="https://wils-stunning-project.webflow.io/"
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
				title="Portfolio"
				madeWith="React, Typescript, Tailwindcss"
				description="Portfolio. Used interactive NavBar, responsive design, pure CSS, and pizzazz."
				gif="https://media.giphy.com/media/AYziFcIOwC3HEmv2HC/giphy.gif"
				demo="https://www.wilfredoflores.dev/"
				github="https://github.com/will-flores1/portfolio"
			/>
		</div>
	);
}
