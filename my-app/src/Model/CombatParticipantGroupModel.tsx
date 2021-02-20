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
}

export default CombatParticipantGroupModel;