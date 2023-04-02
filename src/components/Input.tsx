import { useField } from "formik";

interface Props extends React.ComponentProps<"input"> {
	name: string;
	label: string;
}

const Input = ({ name, ...others }: Props) => {
	const [inputProps, formState] = useField(name);
	const hasError = formState.error && formState.touched;
	return (
		<div className="input">
			<label className={hasError ? "error" : ""}>{others.label}</label>
			<input {...inputProps} {...others} />
			{hasError && <p className="error">{formState.error}</p>}
		</div>
	);
};

export default Input;
