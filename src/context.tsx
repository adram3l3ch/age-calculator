import { createContext, useState, Dispatch, SetStateAction } from "react";
import { FormValues, initialValues } from "./components/types";

type Context = {
	state: FormValues;
	setState: Dispatch<SetStateAction<FormValues>>;
};

type Props = {
	children: React.ReactElement;
};

export const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({ children }: Props) => {
	const [state, setState] = useState(initialValues);
	return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};
