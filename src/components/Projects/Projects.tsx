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
				title="Twitter Clone"
				madeWith="Next.js, React, Typescript, Sanity, Tailwindcss"
				description="Created a clone of the popular social app Twitter. I added tweet, sign in, and comment funtionality."
				gif="https://media.giphy.com/media/tSOPUnPzbxAUVZsUjt/giphy.gif"
				demo="https://twitter-2-0-nu.vercel.app/"
				github="https://github.com/will-flores1/twitter-2.0"
			/>
			<Project
				logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"
				title="Twitter Clone"
				madeWith="Next.js, React, Typescript, Sanity, Tailwindcss"
				description="Created a clone of the popular social app Twitter. I added tweet, sign in, and comment funtionality."
				gif="https://media.giphy.com/media/tSOPUnPzbxAUVZsUjt/giphy.gif"
				demo="https://twitter.com"
				github="https://github.com/will-flores1/twitter-2.0"
			/>
		</div>
	);
}
