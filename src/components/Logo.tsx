import React from "react";

const Logo: React.FC = (): React.JSX.Element => {
	return (
		<div className="flex flex-row items-center">
			<div className="h-3 w-3 rounded-full bg-white mr-2"></div>
			Bridge Collective
		</div>
	);
};

export default Logo;
