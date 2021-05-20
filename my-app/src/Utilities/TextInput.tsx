import React from  'react'

interface TextInputProps {
    onTextChange: Function;
    placeholder?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
}

class TextInput extends React.Component<TextInputProps> {
    constructor(props: TextInputProps) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    
    render() {
        return(
            <input
                type="text"
                onChange={this.handleTextChange}
                placeholder={this.props.placeholder}
                className={this.props.className}
                id={this.props.id}
            />
        ) 
    }

    handleTextChange(e: any) {
        this.props.onTextChange(e.target.value);
    }
}

export default TextInput