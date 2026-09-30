import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ICONS } from "./constants/icons";
import data from "./data/data.json";

function App() {
	return (
		<>
			<header className="text-white">
				<Navbar />
			</header>
			<main className="pt-18 bg-blue-700 min-h-screen text-white">
				<div className="flex lg:flex-row flex-col lg:h-[calc(100vh-4.5rem)]">
					{/* Left Box */}
					<div className="lg:w-162.5 w-full h-full flex flex-col justify-center p-12">
						<h1 className="font-bold text-6xl">
							A classroom <br /> for every child.
						</h1>
						<p className="paragraph mt-6 max-w-96">
							We fund the schools, train the teachers, and measure what works - so every
							child we reach today becomes a graduate tomorrow.
						</p>
					</div>

					{/* Right Box (4 small boxes) */}
					<div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 w-full h-full">
						{data.map((item, index) => (
							<div
								key={index}
								className="flex flex-col justify-between p-12 border-2 border-blue-400 hover:bg-blue-400 cursor-pointer transition-colors duration-300 ease-in-out"
							>
								<div className="flex flex-row justify-between font-semibold lg:mb-0 mb-46">
									<img src={ICONS[item.icon]} alt="Icon" />
									<div className="flex flex-row">
										<span className="text-5xl">{item.number}</span>
										{item.numberIcon && (
											<img
												src={ICONS[item.numberIcon]}
												alt="Number Icon"
												className="h-10 w-10 mt-1.5"
											/>
										)}
									</div>
								</div>
								<div>
									<h2 className="paragraph font-semibold">{item.title}</h2>
									<p className="description">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
