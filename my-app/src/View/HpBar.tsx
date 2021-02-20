import React from 'react';

function HpBar(props: any) {
	const percentage = props.percentage;
	if (percentage >= 0) {
		return (
			<div className="row">
				<div className="col-12 HpBarMax">
					<Filler percentage={props.percentage} />
				</div>
			</div>
		);
	};
	return <div />;
}

const Filler = (props: any) => {
	return <div className="HpBarCur" style={{width: `${props.percentage}%` }} />
}

export default HpBar;