import React from  'react'

interface NumberInputProps {
    onNumberChange: Function;
    className?: string | undefined;
    id?: string | undefined;
}

class NumberInput extends React.Component<NumberInputProps> {
    constructor(props: NumberInputProps) {
        super(props);
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }
    
    render() {
        return(
            <input
                type="number"
                onChange={this.handleNumberChange}
                className={this.props.className}
                id={this.props.id}
            />
        ) 
    }

    handleNumberChange(e: any) {
        this.props.onNumberChange(e.target.value);
    }
}

export default NumberInput