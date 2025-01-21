import { Link } from "react-router-dom";
import { ArticleProps } from "../lib/interface";

function Article({ article }: { article: ArticleProps }) {
	return (
		<Link
			to={"article/" + article.id}
			className="border border-black/20 max-w-[500px] w-full h-full px-3 py-5 space-y-2 hover:shadow-md shadow-sm transition cursor-pointer"
		>
			<p className="text-xs font-bold text-red-500">
				{article.id >= 10 ? article.id : "0" + article.id}
			</p>
			<h1 className="sm:text-2xl text-xl font-bold">{article.title}</h1>
			<p className="text-sm">{article.summary}</p>
		</Link>
	);
}

export default Article;
