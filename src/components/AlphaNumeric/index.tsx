import "./styles.css";

type Props = {
	value: string | number;
	chars?: string[];
};

const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];

const AlphaNumeric = ({ value }: Props) => {
	const _value = value + "";

	const isActive = (ind: number, _ind: number) => {
		if (chars.indexOf(_value[ind]?.toUpperCase()) === -1 && _ind === 0) return true;
		return chars.indexOf(_value[ind]?.toUpperCase()) === _ind;
	};

	return (
		<div className="alphanumeric">
			{Array(_value.length)
				.fill(0)
				.map((_, ind) =>
					chars.map(
						(char, i) =>
							isActive(ind, i) && (
								<p key={i} style={{ animationDelay: `${ind * 150}ms` }}>
									{char}
								</p>
							)
					)
				)}
		</div>
	);
};

export default AlphaNumeric;
