import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="container mx-auto w-full h-full py-4 sm:px-0 px-2">
			{children}
		</section>
	);
}

export default Layout;
