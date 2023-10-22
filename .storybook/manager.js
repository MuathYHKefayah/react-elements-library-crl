import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import "./styles.css";

const hpTheme = create({
	base: "dark",
	brandTitle: "DFE",
});

addons.setConfig({
	theme: hpTheme,
});
