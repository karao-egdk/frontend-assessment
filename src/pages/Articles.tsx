import React from "react";
import { ArticleProps } from "../lib/interface";
import Article from "../components/Article";
import Layout from "../components/Layout";
import axios, { AxiosError } from "axios";
import DisplayError from "../components/DisplayError";
import Loader from "../components/Loader";

function Articles() {
	const [articles, setArticles] = React.useState<ArticleProps[]>([]);
	const [error, setError] = React.useState<AxiosError | null>(null);
	const [loading, setLoading] = React.useState<boolean>(true);

	const fetchArticles = async () => {
		try {
			const response = await axios.get(import.meta.env.VITE_ARTICLE_URL);
			setArticles(response.data);
		} catch (err) {
			setError(err as AxiosError);
		}
		setLoading(false);
	};

	React.useEffect(() => {
		fetchArticles();
	}, []);

	return (
		<Layout>
			{loading ? (
				<Loader />
			) : error ? (
				<DisplayError message="Error fetching data, please try again" />
			) : (
				<>
					<h1 className="my-4 text-3xl font-bold text-gray-700">
						Articles
					</h1>
					<div className="grid gap-4 md:grid-cols-2 mx-auto place-items-center">
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
