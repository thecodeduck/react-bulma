
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
	SelectInput,
} from './';

import './_sass/styles.scss';

const AdvanceFilterButtonStyle = {
	paddingLeft: '0px',
};

storiesOf('Base Components', module)
.add('Select', () => (
	<section className="section">
		<span className="title">
			Select <a className="has-text-link is-size-6" href="https://bulma.io/documentation/form/select/">documentation</a>
		</span>
		<hr />

		<section className="section">
			<h2 className="subtitle">Basic Select</h2>
			<SelectInput
				name="expMonth"
				ariaLabel="Card Expiration Month"
				required
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
			<SelectInput
				name="expMonth"
				selectClass="is-rounded"
				ariaLabel="Card Expiration Month"
				required
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
		</section>
		<section className="section">
			<h2 className="subtitle">Colors</h2>
			<SelectInput
				name="is-primary"
				selectClass="is-primary"
				ariaLabel="Card Expiration Month"
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
			<SelectInput
				name="is-info"
				selectClass="is-info"
				ariaLabel="Card Expiration Month"
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
			<SelectInput
				name="is-success"
				selectClass="is-success"
				ariaLabel="Card Expiration Month"
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
			<SelectInput
				name="is-warning"
				selectClass="is-warning"
				ariaLabel="Card Expiration Month"
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
			<SelectInput
				name="is-danger"
				selectClass="is-danger"
				ariaLabel="Card Expiration Month"
				options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
			/>
		</section>
		<section className="section">
			<h2 className="subtitle">Multiple Select</h2>
			<SelectInput
				name="expMonth"
				selectClass="is-multiple"
				multiple
				size="4"
				ariaLabel="Card Expiration Month"
				required
				options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
			/>
		</section>
	</section>
	));
