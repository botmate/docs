import * as React from 'react';

const Logo = () => (
	<svg
		width='50px'
		height='50px'
		viewBox='0 0 512 512'
		version='1.1'
		style={{
			borderRadius: '12px',
		}}
	>
		<title>logo</title>
		<g id='logo' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
			<g id='Group'>
				<rect
					id='Rectangle'
					fill='#5C6FEE'
					x='0'
					y='0'
					width='512'
					height='512'
				></rect>
				<rect
					id='Rectangle'
					fill='#FFFFFF'
					x='129'
					y='91'
					width='110'
					height='330'
					rx='53'
				></rect>
				<circle
					id='Oval'
					stroke='#5C6FEE'
					stroke-width='15.3865979'
					fill='#B0BAFF'
					cx='283.5'
					cy='321.5'
					r='107.193299'
				></circle>
			</g>
		</g>
	</svg>
);

export { Logo };
