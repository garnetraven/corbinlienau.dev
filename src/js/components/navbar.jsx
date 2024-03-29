import React from "react";
import { Link } from "react-router-dom";

import "../../css/navbar.css";

const navbar = (props) => {
	const { active } = props;

    return(
			<React.Fragment>
				<div className="nav-container">
					<div className="navbar">
						<div className="navbar">
							<div className="nav-background">
									<ul className="nav-list">
										<li className={active === "home" ? "nav-item active" : "nav-item"}>
												<Link to="/">Home</Link>
										</li>
										<li className={active === "about" ? "nav-item active" : "nav-item"}>
												<Link to="/about">About</Link>
										</li>
										<li className={active === "projects" ? "nav-item active" : "nav-item"}>
												<Link to="/projects">Projects</Link>
										</li>
										<li className={active === "articles" ? "nav-item active" : "nav-item"}>
												<Link to="/articles">Articles</Link>
										</li>
										<li className={active === "contact" ? "nav-item active" : "nav-item"}>
												<Link to="/contact">Contact</Link>
										</li>
									</ul>
							</div>
						</div>
					</div> 
				</div>
			</React.Fragment>
    );
};

export default navbar;