import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React, { ReactElement } from "react";
import Button from "./Button";

const setup = (
	className: string,
	type: "button" | "submit",
	children: ReactElement | string,
	props = {}
) => {
	const wrapper = render(
		<Button className={className} type={type} {...props}>
			{children}
		</Button>
	);
	return wrapper;
};

const findElement = (wrapper: HTMLElement, selector: string) => {
	return wrapper.querySelector(selector) as HTMLBaseElement;
};

describe("Button tests", () => {
	test("rendering the button with text, className and button type", () => {
		const { container, getByText } = setup(
			"testClass",
			"button",
			"testText"
		);

		getByText("testText");
		expect(findElement(container, ".testClass")).toBeInTheDocument();
		expect(findElement(container, ".testClass")).toHaveAttribute(
			"type",
			"button"
		);
	});

	test("rendering the button with submit type", () => {
		const { container } = setup("testClass", "submit", "testText");

		expect(findElement(container, ".testClass")).toHaveAttribute(
			"type",
			"submit"
		);
	});

	test("rendering enabled button when Button component has false disabled prop", () => {
		const { container } = setup("testClass", "submit", "testText", {
			disabled: false,
		});
		expect(findElement(container, ".testClass")).not.toHaveClass(
			"disabled-btn"
		);
	});

	test("rendering disabled button when Button component has true disabled prop", () => {
		const { container } = setup("testClass", "submit", "testText", {
			disabled: true,
		});
		expect(findElement(container, ".testClass")).toHaveClass(
			"disabled-btn"
		);
	});

	test("if the Button component has onClick handler as prop and it's not disabled then should call the handler when the button is clicked", () => {
		const onClick = jest.fn();
		const { container } = setup("testClass", "button", "testText", {
			disabled: false,
			onClick: onClick,
		});
		userEvent.click(findElement(container, ".testClass"));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	test("if the Button component has onClick handler as prop and it's disabled then should not call the handler when the button is clicked", () => {
		const onClick = jest.fn();
		const { container } = setup("testClass", "button", "testText", {
			disabled: true,
			onClick: onClick,
		});
		userEvent.click(findElement(container, ".testClass"));
		expect(onClick).not.toHaveBeenCalledTimes(1);
	});
});
