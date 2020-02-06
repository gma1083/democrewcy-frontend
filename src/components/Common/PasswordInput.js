import React from 'react';

function PasswordInput(props) {
    return (
        <div className="form-group">
            <label><strong>{props.label}</strong></label>
            <input 
                type="password" 
                className="form-control" 
                id={props.id} 
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default PasswordInput;