import React from "react";

const Footer: React.FC = (): React.ReactNode => {
	return (
		<footer className="footer fixed bottom-0 left-0 right-0 bg-blue-700 border-t-2 border-blue-400 z-10 py-6 px-12 flex sm:flex-row flex-col sm:items-center justify-between text-white font-semibold`">
			<span>© {new Date().getFullYear()} Bridge Collective. All rights reserved.</span>
			<span>Registered charity 12345678</span>
		</footer>
	);
};

export default Footer;
