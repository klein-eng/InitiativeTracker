import React from 'react';
import HpBar from './HpBar';
import ContentRow from './ContentRow'
import CombatParticipantModel from '../Model/CombatParticipantModel'
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel'

interface InitiativeObjectProps {
	ObjectData: any
}

interface InitiativeObjectState {
	ObjectData: any
}

class InitiativeObject extends React.Component<InitiativeObjectProps, InitiativeObjectState> {
	constructor(props: any) {
		super(props);
		this.state = {ObjectData: props.ObjectData};
	}
	
	render() {
		var participants = [];
		if (this.state.ObjectData instanceof CombatParticipantGroupModel) {
			participants = buildParticipantGroup(this.state.ObjectData.Group);
		}
		else {
			participants.push(<ContentRow key={1} AC={this.state.ObjectData.AC} MaxHP={this.state.ObjectData.MaxHP} CurHP={this.state.ObjectData.CurHP} />)
		}
		
		return (
			<div className="container-fluid initObject">
				<HpBar participant={this.state.ObjectData}/>
				<div className="row">
					<div className="col-sm-6">
						<div className="row">
							<div className="col-2 init-count">{this.state.ObjectData.Initiative}</div>
							<div className="col-10">{this.state.ObjectData.Name}</div>
						</div>
					</div>
					<div className="col-sm-6">
						{participants}
					</div>
				</div>
				{this.state.ObjectData.Note &&
				<input 
					className="notesField" 
					defaultValue={this.state.ObjectData.Note} 
				/>
				}
			</div>
		);
	}
}


function buildParticipantGroup(group: CombatParticipantModel[]): any {
	var participants = [];
	for (var i = 0; i < group.length; i++) {
		participants.push(<ContentRow key={i} AC={group[i].AC} MaxHP={group[i].MaxHP} CurHP={group[i].CurHP} />);
	}
	return participants;
}

export default InitiativeObject;