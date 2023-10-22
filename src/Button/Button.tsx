import React, { ReactElement } from "react";

export interface ButtonProps {
	className: string;
	onClick?: () => void;
	type: "button" | "submit";
	disabled?: boolean;
	children?: ReactElement | string;
}

const Button = (props: ButtonProps) => {
	return (
		<button
				className={`${props.className} ${
					props.disabled ? "disabled-btn" : ""
				}`}
				onClick={!props.disabled ? props.onClick : undefined}
				type={props.type}
			>
				{props.children}
		</button>		
	);
};

export default Button;