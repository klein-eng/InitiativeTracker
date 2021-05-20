import React, { SyntheticEvent } from 'react';
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel';
import CombatParticipantModel from '../Model/CombatParticipantModel';
import InitiativeObjectModel from '../Model/InitiativeObjectModel';
import InitiativeTrackerModel from '../Model/InitiativeTrackerModel';
import NonParticipantModel from '../Model/NonParticipantModel';
import PlayerCharacterModel from '../Model/PlayerCharacterModel';
import InitiativeObjectList from '../View/InitiativeObjectList';
import RoundCount from '../View/RoundCount';
import NewObjectForm from '../View/NewObjectForm'

interface ControllerProps{}
interface ControllerState
{
    InitiativeTracker: InitiativeTrackerModel;
    ShowNewObjectForm: boolean;
}

class InitiativeTableController extends React.Component<ControllerProps, ControllerState>{
    DamageAmount: number = 0;
    
    constructor(props: any) {
        super(props);
        var tracker = new InitiativeTrackerModel();
        tracker.SetParticipantsList(Participants());
        this.state = {InitiativeTracker: tracker, ShowNewObjectForm: false};
        this.ApplyDamage = this.ApplyDamage.bind(this);
        this.ChangeDamageInput = this.ChangeDamageInput.bind(this);
        this.ShowNewObjectForm = this.ShowNewObjectForm.bind(this);
        this.HideNewObjectForm = this.HideNewObjectForm.bind(this);
    }

    render() {
        return(
        <div id="appRoot" className="fullHeight">
            {this.state.ShowNewObjectForm ? 
                <NewObjectForm
                    HideForm={this.HideNewObjectForm}
                    AddObjectToInitiative={this.state.InitiativeTracker.AddParticipant}
                /> : null
            }
            <header id="header">
                <div id="headerContent" className="centered">
                <RoundCount Count={this.state.InitiativeTracker.RoundCount}/>
                    <div className="row">
                        <div className="col-12 col-sm-5">
                            <input type="number" id="damageInput" className="numberInput" onChange={this.ChangeDamageInput}></input>
                            <button id="damageButton" onClick={() => this.ApplyDamage()}>Apply Damage</button>
                        </div>
                        <div className="col-12 align-self-end col-sm-7">
                            <div className="row">
                                <div className="col-4"><button onClick={() => this.NextTurn()}>Next Turn</button></div>
                                <div className="col-4"><button onClick={() => this.ShowNewObjectForm()}>Add New</button></div>
                                <div className="col-4"><button onClick={() => this.DeleteObject()}>Delete</button></div>
                            </div>
                        </div>
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

    ChangeDamageInput(e: any) {
        e.preventDefault();
        let inputValue: number = parseInt(e.target.value);
        if (inputValue === undefined || Number.isNaN(inputValue)) {
            this.DamageAmount = 0;
            e.target.value = "";
        }
        else {
            this.DamageAmount = inputValue
        }
    }

    ApplyDamage() {
        this.state.InitiativeTracker.ApplyDamage(this.DamageAmount);
        this.setState({});
    }

    ShowNewObjectForm() {
        if (this.state.ShowNewObjectForm === false) {
            this.setState({ShowNewObjectForm: true});
        }
    }
    HideNewObjectForm() {
        if (this.state.ShowNewObjectForm === true) {
            this.setState({ShowNewObjectForm: false});
        }
    }

    DeleteObject() {
        this.state.InitiativeTracker.DeleteSelectedParticipants();
        this.setState({});
    }

    NextTurn() {
        this.state.InitiativeTracker.NextTurn();
        this.setState({});
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
	var dragon = new CombatParticipantModel(17, "Dragon", 22,167,124, "Breath Weapon Charged");
	return new CombatParticipantGroupModel(17,"Dragon","Breath Weapon Charged",dragon);
};

function Lair (): InitiativeObjectModel {
	var lair = new NonParticipantModel(20,"Lair Action");
	return lair;
};

function Kobolds (): CombatParticipantGroupModel {
	var kobold = new CombatParticipantModel(17,"kobold",12,6,6);
	var kobold2 = new CombatParticipantModel(17,"kobold",12,6,6);
	var kobold3 = new CombatParticipantModel(17,"kobold",12,6,0);
	return new CombatParticipantGroupModel(17,"Kobold","",kobold,kobold2,kobold3);
};
//#endregion

export default InitiativeTableController;