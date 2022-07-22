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
				description="I built this project as a intro to NextAuth and data fetching. Clone of the popular social app Twitter. It has tweet, sign in, and comment funtionality."
				gif="https://media.giphy.com/media/tSOPUnPzbxAUVZsUjt/giphy.gif"
				demo="https://twitter-2-0-nu.vercel.app/"
				github="https://github.com/will-flores1/twitter-2.0"
			/>
			<Project
				logo="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
				title="Medium 2.0"
				madeWith="Next.js, React, Typescript, Sanity, GROQ,  Tailwindcss"
				description="Another clone, this time of the blogging app Medium. The goal of this project is to practice server-side rendering, data fetching, and form validation."
				gif="https://media.giphy.com/media/meblGF6wWnHssANkdg/giphy.gif"
				demo="https://medium-2-0-sooty.vercel.app/"
				github="https://github.com/will-flores1/medium-2.0"
			/>
			<Project
				logo={pp}
				title="Portfolio"
				madeWith="React, Typescript, Tailwindcss"
				description="My first portfolio. Functional scroll to NavBar, responsive design, pure CSS, and pizzazz."
				gif="https://media.giphy.com/media/AYziFcIOwC3HEmv2HC/giphy.gif"
				demo="https://www.wilfredoflores.dev/"
				github="https://github.com/will-flores1/portfolio"
			/>
			<Project
				logo={pp}
				title="Minimalist Portfolio"
				madeWith="React, Typescript, Tailwindcss"
				description="Minimal portfolio style. Practice for responsive design, tailwindcss, and themes. Inspired by Takuya Matsuyama"
				gif="https://media.giphy.com/media/ZjCBYlg1uDtdUdbeYr/giphy.gif"
				demo="https://portfolio-too.vercel.app/"
				github="https://github.com/will-flores1/portfolio-too"
			/>
		</div>
	);
}
