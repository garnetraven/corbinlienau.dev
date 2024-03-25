import React from "react";

function mediaserver() {
	return {
		codeLink: '',
		coverImage: "",
		date: "February 2024",
		title: "Dockerized Home Media Server",
		description:
			"Setting up a media server using Jellyfin, Sonarr, Radarr in Docker.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}


			.randImage {
				width: 50%;
				align-self: center;
			}
			`,
		keywords: [
		],
		body: (
			<React.Fragment>
			<div className="article-content">
				<div className="paragraph"><p></p></div>
				<img
						src=""
						alt="random"
						className="randImage"
					/>
					<p>Hello!</p>
				<img
						src=""
						alt="group"
						className="randImage"
					/>
			</div>
			</React.Fragment>
		),
	};
}
	
const myArticles = [mediaserver];

export default myArticles;
