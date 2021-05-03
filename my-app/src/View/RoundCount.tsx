import React from 'react';

interface RoundCountProps {
	Count: number;
}

class RoundCount extends React.Component<RoundCountProps> {
	constructor(props: any) {
		super(props);
		return;
	}

	render() {
		return (
		<p>Initiative - Round {this.props.Count} </p>
		);
	}
}

export default RoundCount;