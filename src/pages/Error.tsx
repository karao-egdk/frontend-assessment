import React from "react";

function Error() {
	return (
		<section className="bg-white h-screen">
			<div className="py-8 px-4 w-full h-full flex items-center justify-center lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center space-y-4">
					<h1 className="text-6xl font-extrabold text-primary-600 ">
						404
					</h1>
					<p className="text-3xl tracking-tight text-gray-900 md:text-4xl">
						Something's missing.
					</p>
					<a
						href="/"
						className="inline-flex bg-red-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Back to Homepage
					</a>
				</div>
			</div>
		</section>
	);
}

export default Error;
