import "./whoami.css";

export default function WhoAmI() {
	return (
		<div className="whoami">
			Me in 10 second
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
			<div className="text">
				<div className="text">
					I am web developmer / designer based in Maryland
				</div>
				<div className="text">
					I've taken{" "}
					<a
						href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						CS50
					</a>
					<a
						href="https://www.theodinproject.com/"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						, The Odin Project
					</a>
					<a
						href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						, Web Design
					</a>
				</div>
				<div className="text">
					I build websites using Typescript, React/Nextjs, CSS, and Sanity
				</div>
				<div className="text"></div>
				<div className="text">
					<b>Things that fire me up:</b> health, productivity, computers,
					photography, and movies
				</div>
				<hr />
				<div className="text">
					If you would like to get in touch, please e-mail me at{" "}
					<mark className="highlight">willflores1221@gmail.com</mark>. You might
					also be interested in taking a look at my full array of skills, as
					well as some of the projects I have completed by scrolling down this
					page.
				</div>
			</div>
		</div>
	);
}
