import React from 'react';

function RedAlert(props) {
    if (props.message) {
        return (
            <div className="alert alert-danger" role="alert">
                {props.message}
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default RedAlert;