import React from "react";

function DisplayError({ message }: { message: string }) {
	return (
		<div className="w-full max-h-screen h-full flex items-center justify-center">
			<p className="sm:text-3xl text-xl font-bold h-fit">{message}</p>
		</div>
	);
}

export default DisplayError;
