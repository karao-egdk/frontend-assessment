import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<h1>Home</h1>} />
				<Route path="/article/:id" element={<h1>Articles</h1>} />
				<Route path="*" element={<h1>Error</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
