import React, { type PropsWithChildren } from "react";

type Props = {
	href: string;
} & PropsWithChildren;

const Navlink: React.FC<Props> = ({ href, children }): React.JSX.Element => {
	return (
		<a href={href} className="mb-4 text-3xl hover:underline font-semibold">
			{children}
		</a>
	);
};

export default Navlink;
