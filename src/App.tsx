import Age from "./components/Age";
import AgeForm from "./components/AgeForm";
import AlphaNumeric from "./components/AlphaNumeric";
import Divider from "./components/Divider";

function App() {
	return (
		<div className="container">
			<div className="card">
				<AgeForm />
				<Divider />
				<Age />
			</div>
		</div>
	);
}

export default App;
