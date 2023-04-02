import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";
import validationSchema from "../validationSchema";

const Age = () => {
	const { state } = useContext(AppContext)!;
	const [age, setAge] = useState({ days: -1, months: -1, years: -1 });

	const getAge = async () => {
		try {
			await validationSchema.validate(state);
			const { day, month, year } = state;
			const today = new Date();
			const dob = new Date(`${month}-${day}-${year}`);

			let years = today.getFullYear() - dob.getFullYear();
			let months = today.getMonth() - dob.getMonth();
			let days = today.getDate() - dob.getDate();
			if (days < 0) {
				months--;
				days += new Date(dob.getFullYear(), dob.getMonth() + 1, 0).getDate();
			}
			if (months < 0) {
				years--;
				months += 12;
			}
			setAge({ days, months, years });
		} catch (error) {
			setAge({ days: -1, months: -1, years: -1 });
		}
	};

	useEffect(() => {
		getAge();
	}, [state]);

	return (
		<div className="age">
			<p>
				<span>{age.years >= 0 ? age.years : "--"}</span> years
			</p>
			<p>
				<span>{age.months >= 0 ? age.months : "--"}</span> months
			</p>
			<p>
				<span>{age.days >= 0 ? age.days : "--"}</span> days
			</p>
		</div>
	);
};

export default Age;
