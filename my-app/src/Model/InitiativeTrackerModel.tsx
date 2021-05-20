import InitiativeObjectModel from "./InitiativeObjectModel";
import CombatParticipantModel from "./InitiativeObjectModel";

class InitiativeTrackerModel {
    RoundCount: number;
    CurrentTurnIndex: number;
    private Participants: InitiativeObjectModel[]

    constructor() {
        this.RoundCount = 1;
        this.CurrentTurnIndex = 0;
        this.Participants = [];
        this.AddParticipant = this.AddParticipant.bind(this)
    }

    NextTurn() {
        if((this.CurrentTurnIndex + 1) >= this.Participants.length) {
            this.RoundCount++;
            this.CurrentTurnIndex=0;
        }
        else {
            this.CurrentTurnIndex++;
        }
    }

    AddParticipant(participant: InitiativeObjectModel) {
        console.log(this);
        this.Participants.push(participant);
        this.SortParticipantList();
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

    ApplyDamage(damageAmount: number) {
        for (let index: number = this.Participants.length - 1; index >= 0; index--){
            let participant: InitiativeObjectModel = this.Participants[index];
            if(participant.IsSelected === true) {
                participant.ApplyDamage(damageAmount);
                participant.IsSelected = false;
            }
        }
    }
}

export default InitiativeTrackerModel;