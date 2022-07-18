import React from "react";
import "./experience.css";
import Experience from "./Experience";

function Experiences() {
	return (
		<div className="experience">
			Resum
			<span
				style={{
					color: "white",
					backgroundColor: "var(--primary-color)",
					borderRadius: 4,
					padding: 3,
					margin: 3,
				}}
			>
				e
			</span>
			<div className="titlehehe" style={{ padding: "0" }}>
				Experience
			</div>
			<Experience
				logo="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg"
				title="ZERO to FULL STACK HERO
        "
				madeWith="June 2021 - Present"
				description="description"
			/>
			<Experience
				logo="https://avatars.githubusercontent.com/u/4441966?s=280&v=4"
				title="The Odin Project"
				madeWith="December 2021 - Present"
				description="description"
			/>
			<Experience
				logo="https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png"
				title="CS50's Web Programming"
				madeWith="May 2022"
				description="description"
			/>
			<Experience
				logo="https://www.montgomerycollege.edu/_images/global/mc_horiz_rgb.svg"
				title="Montgomery College"
				madeWith="2018 - 2020"
				description="description"
			/>
		</div>
	);
}

export default Experiences;
