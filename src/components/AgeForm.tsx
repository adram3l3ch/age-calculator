import { Formik } from "formik";
import Input from "./Input";
import { useContext } from "react";
import { AppContext } from "../context";
import validationSchema from "../validationSchema";

const AgeForm = () => {
	const { state, setState } = useContext(AppContext)!;

	const formProps: React.ComponentProps<typeof Formik> = {
		initialValues: state,
		onSubmit: () => {},
		validationSchema,
		enableReinitialize: true,
		validateOnChange: true,
		validateOnMount: true,
	};

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setState(ps => ({ ...ps, [name]: value }));
	}

	return (
		<Formik {...formProps}>
			<div className="ageForm">
				<Input name="day" label="DAY" onChange={handleChange} placeholder="DD" />
				<Input name="month" label="MONTH" onChange={handleChange} placeholder="MM" />
				<Input name="year" label="YEAR" onChange={handleChange} placeholder="YY" />
			</div>
		</Formik>
	);
};

export default AgeForm;
