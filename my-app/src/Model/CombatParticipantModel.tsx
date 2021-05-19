import InitiativeObjectModel from "./InitiativeObjectModel";

class CombatParticipantModel extends InitiativeObjectModel{	
	AC: number;
	MaxHP: number;
	CurHP: number;
	
	constructor(initiative: number, name: string, AC: number, maxHP: number, curHP: number, note?: string) {
		super(initiative, name, note);
		this.AC = AC;
		this.MaxHP = maxHP;
		this.CurHP = curHP;
		
		return this;
	};
	
	IsActive(): boolean {
		return this.CurHP>0;
	};

	ApplyDamage(damageAmount: number) {
		if (this.CurHP < damageAmount) {
			this.CurHP = 0;
		}
		else {
			this.CurHP = this.CurHP - damageAmount;
		}
	}
}

export default CombatParticipantModel;