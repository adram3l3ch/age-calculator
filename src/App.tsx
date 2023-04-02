import Age from "./components/Age";
import AgeForm from "./components/AgeForm";
import AlphaNumeric from "./components/AlphaNumeric";
import Divider from "./components/Divider";

function App() {
	return (
		<main className="container">
			<section className="card">
				<AgeForm />
				<Divider />
				<Age />
			</section>
		</main>
	);
}

export default App;
