import React from 'react';
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel';
import CombatParticipantModel from '../Model/CombatParticipantModel';
import InitiativeObjectModel from '../Model/InitiativeObjectModel';
import InitiativeTrackerModel from '../Model/InitiativeTrackerModel';
import PlayerCharacterModel from '../Model/PlayerCharacterModel';
import InitiativeObjectList from '../View/InitiativeObjectList';
import RoundCount from '../View/RoundCount';

interface ControllerProps{}
interface ControllerState
{
    InitiativeTracker: InitiativeTrackerModel;
}

class InitiativeTableController extends React.Component<ControllerProps, ControllerState>{
    ActiveObjectIndex: number;
    
    constructor(props: any) {
        super(props);
        var tracker = new InitiativeTrackerModel();
        tracker.SetParticipantsList(Participants());
        this.state = {InitiativeTracker: tracker};
        this.ActiveObjectIndex = 1;
    }

    render() {
        return(
        <div className="fullHeight">
            <header id="header">
                <div id="headerContent" className="centered">
                    <RoundCount Count={this.state.InitiativeTracker.RoundCount}/>
                    <div>
                        <button onClick={() => this.NextTurn()}>Next</button>
                        <button onClick={() => this.AddObject()}>Add</button>
                        <button onClick={() => this.DeleteObject()}>Delete</button>
                    </div>
                </div>
            </header>
            <div id="bodyContent">    
                <div>
                    <InitiativeObjectList 
                        InitiativeTracker = {this.state.InitiativeTracker}
                    />
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
        this.state.InitiativeTracker.DeleteSelectedParticipants();
        this.setState({});
        return;
    }

    NextTurn() {
        this.state.InitiativeTracker.NextTurn(); //TODO: Advance through participants list and only increment turn counter when needed
        this.setState({});
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