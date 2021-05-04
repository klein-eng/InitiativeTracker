import React from 'react';
import InitiativeObjectList from './InitiativeObjectList'
import InitiativeTrackerModel from '../Model/InitiativeTrackerModel';

interface InitiativeTableProps {
	InitiativeTracker: InitiativeTrackerModel
	AddObject: Function;
	DeleteObject: Function;
}

class InitiativeTable extends React.Component<InitiativeTableProps> {
	constructor(props: any) {
		super(props);
		this.state = {Participants: props.Participants};
	}

	render() {
		return (
			<div>
				<div>
					<InitiativeObjectList 
						InitiativeTracker = {this.props.InitiativeTracker}
					/>
				</div>
			</div>
		);
	}
}

export default InitiativeTable;