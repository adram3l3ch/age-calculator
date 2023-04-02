import * as yup from "yup";

export default yup.object().shape({
	day: yup
		.number()
		.min(1, "Must be a valid day")
		.max(31, "Must be a valid day")
		.required("This field is required"),
	month: yup
		.number()
		.min(1, "Must be a valid month")
		.max(12, "Must be a valid month")
		.required("This field is required"),
	year: yup
		.number()
		.min(1000, "Must be a valid year")
		.max(new Date().getFullYear(), "Must be in the past")
		.required("This field is required"),
});
