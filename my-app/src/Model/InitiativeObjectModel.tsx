class InitiativeObjectModel {
	Initiative: number;
	Name: string;
	Note: string;
	
	constructor(initiative: number, name: string, note: string="") {
		this.Initiative = initiative;
		this.Name = name;
		this.Note = note;
		return this;
	}
}

export default InitiativeObjectModel;