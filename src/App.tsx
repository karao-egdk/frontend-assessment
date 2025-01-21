import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Articles from "./pages/Articles";
import ViewArticle from "./pages/ViewArticle";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Articles/>} />
				<Route path="/article/:id" element={<ViewArticle/>} />
				<Route path="*" element={<h1>Error</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
