import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

import INFO from "../data/profile";
import myArticles from "../data/articles";

import "../../css/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

  ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.primary.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							<div className="title read-article-title">
								{article().title}
							</div>

							<div className="read-article-body">
								<ArticleStyle>{article().body}</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
