import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Articles from "./pages/Articles";
import ViewArticle from "./pages/ViewArticle";
import Error from "./pages/Error";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Articles />} />
				<Route path="/article/:id" element={<ViewArticle />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
