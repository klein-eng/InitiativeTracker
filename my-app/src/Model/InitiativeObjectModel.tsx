class InitiativeObjectModel {
	Initiative: number;
	Name: string;
	Note: string;
	IsSelected: boolean;
	
	constructor(initiative: number, name: string, note: string="") {
		this.Initiative = initiative;
		this.Name = name;
		this.Note = note;
		this.IsSelected = false;
		return this;
	}

	getKey(){
		return this.Name + this.Initiative;
	}
	ToggleSelection(){
		if (this.IsSelected) {
			this.IsSelected = false;
		}
		else{
			this.IsSelected = true;
		} 
	}
}

export default InitiativeObjectModel;