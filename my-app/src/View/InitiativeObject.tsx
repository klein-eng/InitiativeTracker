import React from 'react';
import HpBar from './HpBar';
import ContentRow from './ContentRow'
import CombatParticipantModel from '../Model/CombatParticipantModel'
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel'
import InitiativeObjectModel from '../Model/InitiativeObjectModel';

interface InitiativeObjectProps {
	ObjectData: InitiativeObjectModel;
	Reorder: Function;
	IsActive: boolean;
}

interface InitiativeObjectState {
	ObjectData: any;
	Initiative: number;
}

class InitiativeObject extends React.Component<InitiativeObjectProps, InitiativeObjectState> {
	constructor(props: any) {
		super(props);
		this.state = {ObjectData: props.ObjectData, Initiative: props.ObjectData.Initiative};

		this.OnInitChanged = this.OnInitChanged.bind(this);
		this.OnInitBlur = this.OnInitBlur.bind(this);
		this.OnInitKeyUp = this.OnInitKeyUp.bind(this);
	}
	
	render() {
		var participants = [];
		if (this.state.ObjectData instanceof CombatParticipantGroupModel) {
			participants = buildParticipantGroup(this.state.ObjectData.Group);
		}
		else {
			participants.push(<ContentRow key={1} AC={this.state.ObjectData.AC} MaxHP={this.state.ObjectData.MaxHP} CurHP={this.state.ObjectData.CurHP} />)
		}
		var classes: string[] = ["container-fluid", "initObject"]
		if (this.props.IsActive) {
			classes.push("activeObject")
		}
		
		return (
			<div className={classes.join(" ")} id={this.props.ObjectData.getKey()}>
				<HpBar participant={this.props.ObjectData}/>
				<div className="row">
					<div className="col-sm-6">
						<div className="row">
							<div className="col-2 initCount">
								<input className="writeField"
									onChange={this.OnInitChanged}
									onBlur={this.OnInitBlur}
									onKeyUp={this.OnInitKeyUp}
									type="text" 
									value={this.props.ObjectData.Initiative}
								/>
							</div>
							<div className="col-10">{this.props.ObjectData.Name}</div>
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

	OnInitChanged(e: any): void {
		e.preventDefault();
		var object = this.state.ObjectData;
		object.Initiative = e.target.value;
		this.setState({ObjectData: object})
	}

	OnInitBlur(): void {
		this.props.Reorder();
	}

	OnInitKeyUp(e: any): void {
		if(e.key === "Enter") {
			this.props.Reorder();
		}
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