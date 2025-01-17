import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto w-full h-full py-4 sm:px-0 px-2">
			{children}
		</div>
	);
}

export default Layout;
