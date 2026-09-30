import { useState } from "react";
import { ICONS } from "../constants/icons";
import Logo from "./Logo";
import Navlink from "./Navlink";

const Navbar: React.FC = (): React.JSX.Element => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<nav className="fixed w-full nav bg-blue bg-blue-700 border-b-2 border-blue-400">
			<div className="flex items-center justify-between z-50 py-6 px-12">
				<Logo />

				<button
					type="button"
					className="cursor-pointer"
					onClick={() => setIsMenuOpened((prevState) => !prevState)}
				>
					<img
						src={isMenuOpened ? ICONS.close : ICONS.burguerMenu}
						alt={isMenuOpened ? "Close menu" : "Open menu"}
					/>
				</button>
			</div>

			{isMenuOpened && (
				<>
					<div
						className="fixed left-0 w-full h-full bg-black/25 z-20"
						onClick={() => setIsMenuOpened(false)}
					></div>
					<div className="absolute top-18.5 right-0 sm:w-100 w-full bg-blue-700 p-12 flex flex-col sm:items-end items-center sm:h-screen overflow-y-auto z-50">
						<Navlink href="#about">About</Navlink>
						<Navlink href="#work">Our Work</Navlink>
						<Navlink href="#partners">Partners</Navlink>
						<Navlink href="#annual-report">Annual Report</Navlink>
						<Navlink href="#donate">Donate</Navlink>
					</div>
				</>
			)}
		</nav>
	);
};

export default Navbar;
