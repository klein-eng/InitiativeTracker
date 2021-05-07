import InitiativeObjectModel from "./InitiativeObjectModel";


class InitiativeTrackerModel {
    RoundCount: number;
    ActiveObjectIndex: number;
    private Participants: InitiativeObjectModel[]

    constructor() {
        this.RoundCount = 1;
        this.ActiveObjectIndex = 0;
        this.Participants = [];
    }

    NextTurn() {
        if((this.ActiveObjectIndex + 1) >= this.Participants.length) {
            this.RoundCount++;
            this.ActiveObjectIndex=0;
        }
        else {
            this.ActiveObjectIndex++;
        }
    }

    SortParticipantList() {
        this.Participants.sort((left: InitiativeObjectModel, right:InitiativeObjectModel) => {
			if (left.Initiative > right.Initiative) return -1;
			else if (left.Initiative < right.Initiative) return 1;
			return 0;
		});
    }

    GetParticipants() {
        return this.Participants;
    }
    SetParticipantsList(list: InitiativeObjectModel[]) {
        list.sort((left: InitiativeObjectModel, right:InitiativeObjectModel) => {
			if (left.Initiative > right.Initiative) return -1;
			else if (left.Initiative < right.Initiative) return 1;
			return 0;
		});
        this.Participants = list;
    }

    DeleteSelectedParticipants() {
        for (let index: number = this.Participants.length - 1; index >= 0; index--){
            if(this.Participants[index].IsSelected === true) {
                this.Participants.splice(index, 1);
            }
        }
    }
}

export default InitiativeTrackerModel;