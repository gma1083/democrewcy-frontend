import React from 'react';

function InfoAlert(props) {
    if (props.message) {
        return (
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default InfoAlert;