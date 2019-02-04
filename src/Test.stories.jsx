
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
	SelectInput,
} from './';

import './_sass/styles.scss';
import './css/styles.css';
import './css/main.css';

const AdvanceFilterButtonStyle = {
	paddingLeft: '0px',
};

storiesOf('Example Component', module)
.add('Example', () => (
	<SelectInput
		name="expMonth"
		ariaLabel="Card Expiration Month"
		required
		options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
	/>
	));
