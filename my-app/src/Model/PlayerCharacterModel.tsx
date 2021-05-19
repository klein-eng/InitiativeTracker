import CombatParticipantModel from "./CombatParticipantModel";
import InitiativeObjectModel from "./InitiativeObjectModel";

class PlayerCharacterModel extends CombatParticipantModel {	
	constructor(initiative: number, name: string, AC: number, maxHP: number, curHP: number, note? : string) {
        super(initiative, name, AC, maxHP, curHP, note)
		return this;
	};
	
	IsActive(): boolean {
		return this.CurHP>0;
	};
}

export default PlayerCharacterModel;