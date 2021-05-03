import React from 'react';
import InitiativeObjectList from './InitiativeObjectList'
import InitiativeObjectModel from '../Model/InitiativeObjectModel'

interface InitiativeTableProps {
	Participants: InitiativeObjectModel[]
	AddObject: Function
	DeleteObject: Function
}

interface InitiativeTableState {
	Participants: InitiativeObjectModel[];
}

class InitiativeTable extends React.Component<InitiativeTableProps,InitiativeTableState> {
	constructor(props: any) {
		super(props);
		this.state = {Participants: props.Participants};
	}

	render() {
		return (
			<div>
				<div>
					<InitiativeObjectList 
						Participants={this.state.Participants}
					>
					</InitiativeObjectList>
				</div>
			</div>
		);
	}
}

export default InitiativeTable;