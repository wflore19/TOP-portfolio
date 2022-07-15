import React from "react";
import "./projects.css";

interface ProjectProps {
	title?: string;
	description?: string;
	madeWith?: string;
	github?: string;
	demo?: string;
	logo?: string;
	gif?: string;
}

const Project = ({
	title,
	description,
	madeWith,
	github,
	demo,
	logo,
	gif,
}: ProjectProps) => {
	return (
		<div className="whole">
			<div className="hoho">
				<img className="logo" src={logo} alt="" />
				<div>
					<div className="titlehehe">{title}</div>
					<div className="made-with">{madeWith}</div>
				</div>
			</div>
			<div className="description">{description}</div>
			<div className="heru">
				<img className="twitter-gif" src={gif} alt="" />
			</div>

			<div className="hehexd">
				<a className="demo" href={demo} target="_blank" rel="noreferrer">
					Demo
				</a>
				<a className="github" href={github} target="_blank" rel="noreferrer">
					Source Code
				</a>
			</div>
		</div>
	);
};

export default Project;
