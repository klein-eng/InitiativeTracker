class CombatParticipantModel {	
	AC: number;
	MaxHP: number;
	CurHP: number;
	
	constructor(AC: number, maxHP: number, curHP: number) {
		this.AC = AC;
		this.MaxHP = maxHP;
		this.CurHP = curHP;
		
		return this;
	};
	
	IsActive(): boolean {
		return this.CurHP>0;
	};
}

export default CombatParticipantModel;