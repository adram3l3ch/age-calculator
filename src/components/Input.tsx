import { useField } from "formik";
import { useId } from "react";

interface Props extends React.ComponentProps<"input"> {
	name: string;
	label: string;
}

const Input = ({ name, ...others }: Props) => {
	const [inputProps, formState] = useField(name);
	const id = useId();
	const hasError = formState.error && formState.touched;
	return (
		<div className="input">
			<label className={hasError ? "error" : ""} htmlFor={id}>
				{others.label}
			</label>
			<input {...inputProps} {...others} id={id} />
			{hasError && <p className="error">{formState.error}</p>}
		</div>
	);
};

export default Input;
