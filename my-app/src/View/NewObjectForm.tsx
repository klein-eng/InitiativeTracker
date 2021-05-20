import React from 'react'
import InitiativeObjectModel from '../Model/InitiativeObjectModel';
import InitiativeObjectFactory from '../Model/InitiativeObjectFactory';
import NonParticipantModel from '../Model/NonParticipantModel';
import TextInput from '../Utilities/TextInput';
import NumberInput from '../Utilities/NumberInput';

interface NewObjectFormProps {
    HideForm: Function;
    AddObjectToInitiative: Function;
}

interface NewObjectFormState {
    Name: string;
    Initiative: number;
    MaxHP?: number;
    CurHP?: number;
    AC?: number;
    Notes?: string;
}

class NewObjectForm extends React.Component<NewObjectFormProps, NewObjectFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            Name: "", 
            Initiative: 0,
        };
        this.HandleNameChange = this.HandleNameChange.bind(this);
        this.HandleInitChange = this.HandleInitChange.bind(this);
        this.HandleMaxHPChange = this.HandleMaxHPChange.bind(this);
        this.HandleCurHPChange = this.HandleCurHPChange.bind(this);
        this.HandleACChange = this.HandleACChange.bind(this);
        this.HandleNotesChange = this.HandleNotesChange.bind(this);
    }

    render() {
        return(
            <div id="newObjectContainer" className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="row">
                            <div className="col-3">
                            <NumberInput onNumberChange={this.HandleInitChange} className="numberInput"/>
                            </div>
                            <div className="col-9">
                            <TextInput id="nameInput" onTextChange={this.HandleNameChange} placeholder="Name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-4">
                                AC: <NumberInput onNumberChange={this.HandleACChange} className="numberInput"/>
                            </div>
                            <div className="col-6 col-lg-5">
                                Max HP: <NumberInput onNumberChange={this.HandleMaxHPChange} className="numberInput"/>
                            </div>
                            <div className="col-6 col-lg-3">
                                HP: <NumberInput onNumberChange={this.HandleCurHPChange} className="numberInput"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TextInput onTextChange={this.HandleNotesChange} id="notesInput" placeholder="Notes"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button onClick={() => this.CloseForm()}>Close</button>
                    </div>
                    <div className="col-4">
                        <button onClick={() => this.OnNextButtonClicked()}>Next</button>
                    </div>
                    <div className="col-4">
                        <button onClick={() => this.OnDoneButtonClicked()}>Done</button>
                    </div>
                </div>
            </div>
        );
    }

    //#region Input Handlers
    HandleNameChange(newName: string) {
        this.setState({Name: newName});
    }
    HandleInitChange(newInit: number) {
        this.setState({Initiative: newInit});
    }
    HandleMaxHPChange(newMaxHP: number) {
        this.setState({MaxHP: newMaxHP});
    }
    HandleCurHPChange(newCurHP: number) {
        this.setState({CurHP: newCurHP});
    }
    HandleACChange(newAC: number) {
        this.setState({AC: newAC});
    }
    HandleNotesChange(newNotes: string) {
        this.setState({Notes: newNotes});
    }
    //#endregion Input Handlers
    
    CloseForm() {
        this.props.HideForm();
    }

    AddObject() {
        let initObject: InitiativeObjectModel = InitiativeObjectFactory.makeObject(
            this.state.Initiative,
            this.state.Name,
            this.state.AC,
            this.state.MaxHP,
            this.state.CurHP,
            this.state.Notes
            )
        this.props.AddObjectToInitiative(initObject);
    }

    OnNextButtonClicked() {
        this.AddObject();
        //reset all fields
    }

    OnDoneButtonClicked() {
        this.AddObject();
        this.CloseForm();
    }
}

export default NewObjectForm;