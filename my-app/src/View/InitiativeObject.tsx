import React from 'react';
import HpBar from './HpBar';
import ContentRow from './ContentRow'
import CombatParticipantModel from '../Model/CombatParticipantModel'
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel'

function InitiativeObject(props: any) {
	
	var participants = [];
	if (props.ObjectData instanceof CombatParticipantGroupModel) {
		participants = buildParticipantGroup(props.ObjectData.Group);
	}
	
	return (
		<div className="container-fluid initObject">
			<HpBar percentage={getHpPercentage(props.ObjectData)}/>
			<div className="row">
				<div className="col-sm-6">
					<div className="row">
						<div className="col-2 init-count">{props.ObjectData.Initiative}</div>
						<div className="col-10">{props.ObjectData.Name}</div>
					</div>
				</div>
				<div className="col-sm-6">
					{participants}
				</div>
			</div>
			{props.ObjectData.Note &&
			<input 
				className="notesField" 
				defaultValue={props.ObjectData.Note} 
			/>
			}
		</div>
	);
}

function getHpPercentage(ObjectData: any): number {
	if (ObjectData instanceof CombatParticipantGroupModel) {
		var curHp
		var maxHp
		if (ObjectData.Group.length === 1) {
			curHp = ObjectData.Group[0].CurHP;
			maxHp = ObjectData.Group[0].MaxHP;
		}
		else {
			curHp = ObjectData.ActiveCombatants();
			maxHp = ObjectData.Group.length;
		}
		return Math.round((curHp/maxHp)*100);
	}
	return -1;
}

function buildParticipantGroup(group: CombatParticipantModel[]): any {
	var participants = [];
	for (var i = 0; i < group.length; i++) {
		participants.push(<ContentRow key={i} AC={group[i].AC} MaxHP={group[i].MaxHP} CurHP={group[i].CurHP} />);
	}
	return participants;
}

export default InitiativeObject;