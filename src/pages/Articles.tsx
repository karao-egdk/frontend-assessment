import React from "react";
import { ArticleProps } from "../lib/interface";
import Article from "../components/Article";
import Layout from "../components/Layout";
import axios, { AxiosError } from "axios";
import DisplayError from "../components/DisplayError";

function Articles() {
	const [articles, setArticles] = React.useState<ArticleProps[]>([]);
	const [error, setError] = React.useState<AxiosError | null>(null);

	React.useEffect(() => {
		axios
			.get(import.meta.env.VITE_ARTICLE_URL)
			.then((res) => setArticles(res.data))
			.catch((err: AxiosError) => setError(err));
	}, []);

	return (
		<Layout>
			{error ? (
				<DisplayError message="Error fetching data, please try again"/>
			) : (
				<>
					<h1 className="my-4 text-3xl font-bold text-gray-700">
						Articles
					</h1>
					<div className="grid gap-4 md:grid-cols-2 mx-auto content-center">
						{articles.map((article) => {
							return (
								<Article article={article} key={article.id} />
							);
						})}
					</div>
				</>
			)}
		</Layout>
	);
}
export default Articles;
