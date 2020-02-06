import React from 'react';

function TextInput(props) {
    return (
        <div className="form-group">
            <label><strong>{props.label}</strong></label>
            <input 
                type="text" 
                className="form-control" 
                id={props.id} 
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default TextInput;