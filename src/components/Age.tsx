import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";
import validationSchema from "../validationSchema";
import AlphaNumeric from "./AlphaNumeric";

type Age = {
	days: null | number;
	months: null | number;
	years: null | number;
};

const Age = () => {
	const { state } = useContext(AppContext)!;
	const [age, setAge] = useState<Age>({ days: null, months: null, years: null });

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
			setAge({ days: null, months: null, years: null });
		}
	};

	useEffect(() => {
		getAge();
	}, [state]);

	return (
		<div className="age">
			<div className="age-grp">
				<AlphaNumeric value={typeof age.years === "number" ? age.years : "--"} />
				<p className="title">years</p>
			</div>
			<div className="age-grp">
				<AlphaNumeric value={typeof age.months === "number" ? age.months : "--"} />
				<p className="title">months</p>
			</div>
			<div className="age-grp">
				<AlphaNumeric value={typeof age.days === "number" ? age.days : "--"} />
				<p className="title">days</p>
			</div>
		</div>
	);
};

export default Age;
