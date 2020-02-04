import React from 'react';

function PasswordInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input 
                type="password" 
                className="form-control" 
                id={props.id} 
                value={props.value}
                onChange={props.onChange}
                poop={'poop'}
            />
        </div>
    )
}

export default PasswordInput;