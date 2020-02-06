import React from 'react';

function EmailInput(props) {
    return (
        <div className="form-group">
            <label><strong>{props.label}</strong></label>
            <input 
                type="email" 
                className="form-control" 
                id={props.id} 
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default EmailInput;