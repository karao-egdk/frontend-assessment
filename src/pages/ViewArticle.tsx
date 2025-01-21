import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router";
import axios, { AxiosError } from "axios";
import DisplayError from "../components/DisplayError";
import { ArticleProps } from "../lib/interface";
import Loader from "../components/Loader";

function ViewArticle() {
	let params = useParams();

	const [article, setArticle] = React.useState<ArticleProps>();
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<AxiosError | null>(null);

	const fetchArticle = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_ARTICLE_URL + params.id
			);
            setArticle(response.data)
		} catch (err) {
             setError(err as AxiosError)
        }
		setLoading(false);
	};

	React.useEffect(() => {
        fetchArticle();
    }, []);

	return (
		<Layout>
			{loading ? (
				<Loader />
			) : error ? (
				<DisplayError message="Error fetching data, Please try again" />
			) : (
				<div className="flex flex-col items-center gap-3 max-w-2xl mx-auto px-4 my-5">
					{article && (
						<p className="w-full text-left font-bold text-red-500">
							{article?.id >= 10
								? article?.id
								: "0" + article?.id}
						</p>
					)}
					<h1 className="sm:text-4xl text-2xl font-extrabold uppercase">
						{article?.title}
					</h1>
					<h3 className="sm:text-xl text-lg font-semibold">
						{article?.summary}
					</h3>
					<p className="text-sm">{article?.fullText}</p>
				</div>
			)}
		</Layout>
	);
}

export default ViewArticle;
