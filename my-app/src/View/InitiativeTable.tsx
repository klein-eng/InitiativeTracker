import React from 'react';
import RoundCount from './RoundCount'
import InitiativeObject from './InitiativeObject'
import InitiativeObjectModel from '../Model/InitiativeObjectModel'
import CombatParticipantModel from '../Model/CombatParticipantModel'
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel'
import PlayerCharacterModel from '../Model/PlayerCharacterModel';

function InitiativeTable(props: any) {
	return (
	<div>
		<RoundCount Count={3}/>
		<InitiativeObject ObjectData={Rogue()}/>
		<InitiativeObject ObjectData={Lair()}/>
		<InitiativeObject ObjectData={Dragon()}/>
		<InitiativeObject ObjectData={Kobolds()}/>
	</div>
	);
}

function Rogue (): PlayerCharacterModel {
	return new PlayerCharacterModel(26,"Rogue",21, 36, 17, "Hidden");
};

function Dragon (): CombatParticipantGroupModel {
	var dragon = new CombatParticipantModel(22,167,124);
	return new CombatParticipantGroupModel(17,"Dragon","Breath Weapon Charged",dragon);
};

function Lair (): InitiativeObjectModel {
	var lair = new InitiativeObjectModel(20,"Lair Action");
	return lair;
};

function Kobolds (): CombatParticipantGroupModel {
	var kobold = new CombatParticipantModel(12,6,6);
	var kobold2 = new CombatParticipantModel(12,6,6);
	var kobold3 = new CombatParticipantModel(12,6,0);
	return new CombatParticipantGroupModel(17,"Kobold","",kobold,kobold2,kobold3);
};

export default InitiativeTable;