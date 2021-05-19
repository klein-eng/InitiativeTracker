import InitiativeObjectModel from "./InitiativeObjectModel";

class NonParticipantModel extends InitiativeObjectModel{
    ApplyDamage(damageAmount: number) {
        return;
    }
}

export default NonParticipantModel;