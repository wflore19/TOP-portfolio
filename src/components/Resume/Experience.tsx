import React from "react";
import "./experience.css";

interface ExperienceProps {
	link?: string;
	title?: string;
	description?: string;
	madeWith?: string;
	logo?: string;
}

const Experience = ({
	link,
	title,
	description,
	madeWith,
	logo,
}: ExperienceProps) => {
	return (
		<div className="experience">
			<div className="hoho">
				<img className="logo" src={logo} alt="" />
				<div>
					<div className="titlehehe">{title}</div>
					<div className="made-with">{madeWith}</div>
				</div>
			</div>
			<div className="description">{description}</div>
		</div>
	);
};

export default Experience;
