import "./heroes.css";
// import imposter from './copypasta.jpg';

export default function Heroes() {
	return (
		<div className="heroes">
			{/* <img src={imposter} alt="img" className="copy" /> */}
			<h1 className="heading">
				Hi I'm Wilfredo 👋​, a web developer from Maryland
			</h1>
			<div className="btns-list">
				<a
					className="btns"
					href="https://docs.google.com/document/d/1YgyqVlHHdGI0bW5oVdtBjlB4vu_UHn_edhggokYSOIM/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
				<a
					className="btns"
					href="https://www.linkedin.com/in/wilfredo-flores-666492173/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					className="btns"
					href="https://github.com/will-flores1"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<a
					className="btns"
					href="https://www.youtube.com/c/WillFlores1"
					target="_blank"
					rel="noreferrer"
				>
					Youtube
				</a>
			</div>
		</div>
	);
}
