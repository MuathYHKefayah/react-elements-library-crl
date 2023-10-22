import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import  Button  from "../Button/Button";
import { ButtonProps } from "../Button/Button";

const meta: Meta = {
	title: "Elements",
	component: Button,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const button = Template.bind({});

button.args = {
	children: "Save",
	type: "submit",
	onClick: () => {alert("saved!")}
};
