import Project from "./Project";
import "./projects.css";

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
				description="I built this project as a intro to auth and data fetching. Clone of the popular social app Twitter. It includes tweets, sign in, and comment funtionality."
				gif="https://media.giphy.com/media/tSOPUnPzbxAUVZsUjt/giphy.gif"
				demo="https://twitter-2-0-nu.vercel.app/"
				github="https://github.com/will-flores1/twitter-2.0"
			/>
			<Project
				logo="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
				title="Medium 2.0"
				madeWith="Next.js, React, Typescript, Sanity, GROQ,  Tailwindcss"
				description="Clone of the popular blogging app Medium. The purpose of this project is to practice server-side rendering, data fetching, and form validation with Next.js and Sanity CMS. Deployed with Vercel."
				gif="https://media.giphy.com/media/meblGF6wWnHssANkdg/giphy.gif"
				demo="https://medium-2-0-sooty.vercel.app/"
				github="https://github.com/will-flores1/medium-2.0"
			/>
		</div>
	);
}
