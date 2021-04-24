import React from 'react';
import InitiativeObjectModel from '../Model/InitiativeObjectModel'
import InitiativeObject from './InitiativeObject'

interface InitiativeObjectListProps {
	Participants: InitiativeObjectModel[]
}

interface InitiativeObjectListState {
	Participants: InitiativeObjectModel[];
}

class InitiativeObjectList extends React.Component<InitiativeObjectListProps,InitiativeObjectListState> {
	constructor(props: any) {
		super(props);
		this.state = {Participants: props.Participants};

		this.Reorder = this.Reorder.bind(this);
	}
	
	render(){
		this.state.Participants.sort((left: InitiativeObjectModel, right:InitiativeObjectModel) => {
			if (left.Initiative > right.Initiative) return -1;
			else if (left.Initiative < right.Initiative) return 1;
			return 0;
		});
		return this.state.Participants.map((initiativeObject: InitiativeObjectModel) => 
			<InitiativeObject 
				key={initiativeObject.getKey()} 
				ObjectData={initiativeObject}
				Reorder={this.Reorder}
			>
			</InitiativeObject>
		);
	}

	Reorder() {
		this.setState({});
	}
}

export default InitiativeObjectList;