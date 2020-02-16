import React from 'react';

function DateInput(props) {
    return (
        <div className="form-group">
            <label><strong>{props.label}</strong></label>
            <input 
                type="date" 
                className="form-control" 
                id={props.id} 
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default DateInput;