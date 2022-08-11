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
				<div className="text">I am a frontend developer based in Maryland</div>
				<div className="text">
					I discovered my passion for web development after taking{" "}
					<a
						href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						Web Design
					</a>
					, followed by{" "}
					<a
						href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						CS50
					</a>
					. Currently finishing up{" "}
					<a
						href="https://www.theodinproject.com/"
						target="_blank"
						rel="noreferrer"
						className="linkedText"
					>
						The Odin Project
					</a>
					.
				</div>
				<div className="text">
					I love learning new things, currently learning Redux & paddleboarding!
				</div>
				<div className="text">
					<b>Favorite tech:</b> Typescript, React, Next.js, and CSS.
				</div>
				<div className="text"></div>
				<div className="text">
					<b>Things that fire me up:</b> health, productivity, Curb Your
					Enthusiasm, photography, and movies
				</div>
			</div>
		</div>
	);
}
