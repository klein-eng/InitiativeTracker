import React from 'react';
import InitiativeObjectModel from '../Model/InitiativeObjectModel'
import InitiativeTrackerModel from '../Model/InitiativeTrackerModel';
import InitiativeObject from './InitiativeObject'

interface InitiativeObjectListProps {
	InitiativeTracker: InitiativeTrackerModel;
}

class InitiativeObjectList extends React.Component<InitiativeObjectListProps> {
	constructor(props: any) {
		super(props);
		//this.state = {Participants: props.Participants};

		this.Reorder = this.Reorder.bind(this);
	}
	
	render(){
		return this.props.InitiativeTracker.GetParticipants().map((initiativeObject: InitiativeObjectModel, index: number) => 
			<InitiativeObject 
				key = {initiativeObject.getKey()} 
				ObjectData = {initiativeObject}
				Reorder = {this.Reorder}
				IsActive = {index === this.props.InitiativeTracker.CurrentTurnIndex}
			/>
		);
	}

	Reorder() {
		this.props.InitiativeTracker.SortParticipantList()
		this.setState({});
	}

	DeleteObjects() {
		this.props.InitiativeTracker.DeleteSelectedParticipants();
		this.setState({});
	}
}

export default InitiativeObjectList;