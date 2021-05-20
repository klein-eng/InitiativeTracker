import CombatParticipantModel from "./CombatParticipantModel";
import InitiativeObjectModel from "./InitiativeObjectModel";
import NonParticipantModel from "./NonParticipantModel";
import PlayerCharacterModel from "./PlayerCharacterModel";

class InitiativeObjectFactory {
    static makeObject(init: number, name: string, AC?: number, maxHP?: number, curHP?: number, note?: string): InitiativeObjectModel {
        if(AC && maxHP) {
            return new CombatParticipantModel(init, name, AC, maxHP, curHP, note)
        }
        return new NonParticipantModel(init, name)
    }
}

export default InitiativeObjectFactory