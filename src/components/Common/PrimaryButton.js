import React from 'react';

function PrimaryButton(props) {
    return ( 
        <button 
            className="btn btn-primary"
            onClick={props.onClick}
        >{props.label}</button>
    )
}

export default PrimaryButton;