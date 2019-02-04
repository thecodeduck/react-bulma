import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
	name: 'Test',
	url: '',
	showStoriesPanel: true,
	 	showAddonPanel: false,
	showSearchBox: false,
	// addonPanelInRight: false,
	// sortStoriesByKind: false,
	// hierarchySeparator: null,
	// hierarchyRootSeparator: null,
	// sidebarAnimations: true,
	// selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});


const components = require.context('../src/', true, /stories\.jsx$/);

const load = () => {
	components.keys().forEach(components);
};

configure(load, module);
