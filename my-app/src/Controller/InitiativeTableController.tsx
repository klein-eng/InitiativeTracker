import React from 'react';
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel';
import CombatParticipantModel from '../Model/CombatParticipantModel';
import InitiativeObjectModel from '../Model/InitiativeObjectModel';
import PlayerCharacterModel from '../Model/PlayerCharacterModel';
import InitiativeTable from '../View/InitiativeTable';
import RoundCount from '../View/RoundCount';

interface ControllerProps{}
interface ControllerState
{
    RoundCount: number;
}

class InitiativeTableController extends React.Component<ControllerProps, ControllerState>{
    Participants: InitiativeObjectModel[] = [];
    RoundCount: number;
    
    constructor(props: any) {
        super(props);
        this.Participants = Participants();
        this.RoundCount = 1
        this.state = {RoundCount: this.RoundCount}
    }

    render() {
        return(
        <div className="fullHeight">
            <header id="header">
                <div id="headerContent" className="centered">
                    <RoundCount Count={this.state.RoundCount}/>
                    <div>
                        <button onClick={() => this.NextTurn()}>Next</button>
                        <button onClick={() => this.AddObject()}>Add</button>
                    </div>
                </div>
            </header>
            <div id="bodyContent">    
                <div>
                    <InitiativeTable 
                        Participants={this.Participants}
                        AddObject={this.AddObject}
                        DeleteObject={this.DeleteObject}>
                    </InitiativeTable>
                </div>
            </div>
        </div>
        );
    }

    AddObject() {
        this.setState({});
        return;
    }

    DeleteObject() {
        this.setState({});
        return;
    }

    NextTurn() {
        this.RoundCount++; //TODO: Advance through participants list and only increment turn counter when needed
        this.setState({RoundCount: this.RoundCount});
        return;
    }
}

//#region Test data
function Participants(): InitiativeObjectModel[] {
    return [Rogue(), Dragon(), Lair(), Kobolds()];
}

function Rogue (): PlayerCharacterModel {
	return new PlayerCharacterModel(26,"Rogue",21, 36, 17, "Hidden");
};

function Dragon (): CombatParticipantGroupModel {
	var dragon = new CombatParticipantModel(22,167,124);
	return new CombatParticipantGroupModel(17,"Dragon","Breath Weapon Charged",dragon);
};

function Lair (): InitiativeObjectModel {
	var lair = new InitiativeObjectModel(20,"Lair Action");
	return lair;
};

function Kobolds (): CombatParticipantGroupModel {
	var kobold = new CombatParticipantModel(12,6,6);
	var kobold2 = new CombatParticipantModel(12,6,6);
	var kobold3 = new CombatParticipantModel(12,6,0);
	return new CombatParticipantGroupModel(17,"Kobold","",kobold,kobold2,kobold3);
};
//#endregion

export default InitiativeTableController;