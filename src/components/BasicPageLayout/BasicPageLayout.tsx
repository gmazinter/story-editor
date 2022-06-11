import type { ParentComponent } from "solid-js";
import Header from "../Header";

export const BasicPageLayout: ParentComponent = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
