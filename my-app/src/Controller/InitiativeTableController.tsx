import { render } from '@testing-library/react';
import React from 'react';
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel';
import CombatParticipantModel from '../Model/CombatParticipantModel';
import InitiativeObjectModel from '../Model/InitiativeObjectModel';
import PlayerCharacterModel from '../Model/PlayerCharacterModel';
import InitiativeObject from '../View/InitiativeObject';
import InitiativeTable from '../View/InitiativeTable';

class InitiativeTableController extends React.Component{
    render() {
        return(<InitiativeTable Participants={Participants()}></InitiativeTable>);
    }
}

function Participants(): InitiativeObjectModel[] {
    return [Rogue(), Dragon(), Lair(), Kobolds()];
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

export default InitiativeTableController;