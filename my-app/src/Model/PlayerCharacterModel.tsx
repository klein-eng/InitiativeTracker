import CombatParticipantModel from "./CombatParticipantModel";
import InitiativeObjectModel from "./InitiativeObjectModel";

class PlayerCharacterModel extends InitiativeObjectModel implements CombatParticipantModel {	
    AC: number;
	MaxHP: number;
	CurHP: number;
	
	constructor(initiative: number, name: string, AC: number, maxHP: number, curHP: number, note? : string) {
        super(initiative, name, note)
        this.AC = AC;
		this.MaxHP = maxHP;
		this.CurHP = curHP;
		
		return this;
	};
	
	IsActive(): boolean {
		return this.CurHP>0;
	};
}

export default PlayerCharacterModel;