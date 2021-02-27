import React from 'react';
import RoundCount from './RoundCount'
import InitiativeObject from './InitiativeObject'
import InitiativeObjectModel from '../Model/InitiativeObjectModel'

interface InitiativeTableProps {
	Participants: InitiativeObjectModel[];
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
				<RoundCount Count={3}/>
				<div>
					<InitiativeObjectList Objects={this.state.Participants}/>
				</div>
			</div>
		);
	}
}

function InitiativeObjectList(props: any) {
	props.Objects.sort((left: InitiativeObjectModel, right:InitiativeObjectModel) => {
		if (left.Initiative > right.Initiative) return -1;
		else if (left.Initiative < right.Initiative) return 1;
		return 0;
	});
	return props.Objects.map((initiativeObject: InitiativeObjectModel) => 
		<InitiativeObject key={initiativeObject.Name} ObjectData={initiativeObject}></InitiativeObject>
	);
}

export default InitiativeTable;