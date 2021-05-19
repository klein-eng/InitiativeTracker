import InitiativeObjectModel from './InitiativeObjectModel'
import CombatParticipantModel from './CombatParticipantModel'

class CombatParticipantGroupModel extends InitiativeObjectModel {	
	Group: CombatParticipantModel[];
	
	constructor(initiative: number, name: string, note: string="",...group: CombatParticipantModel[]) {
		super(initiative,name,note);
		this.Group = group;
		
		return this;
	}
	
	ActiveCombatants(): number {
		var result = 0;
		for (let participant of this.Group) {
			if (participant.IsActive()) {
				result++;
			}
		}
		return result;
	}

	ApplyDamage(damageAmount: number) {
		for (let index: number = this.Group.length - 1; index >= 0; index--){
			let participant: CombatParticipantModel = this.Group[index];
            if(participant.IsSelected === true || true) { //TODO: add way to select group member
				participant.ApplyDamage(damageAmount);
			}
		}
	}
}

export default CombatParticipantGroupModel;