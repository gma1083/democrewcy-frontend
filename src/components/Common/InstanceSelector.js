import React from 'react';

function InstanceSelector(props) {
    return (
        <div className="form-group">
            <label><strong>{props.label}</strong></label>
            <div className="input-group">
                <input
                    type='text'
                    className='form-control'
                    id='search-box'
                    value={props.value}
                    onChange={props.onChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"></button>
                    <div className="dropdown-menu">
                        {
                            props.results.map((result) =>{
                                return (
                                    <a 
                                        className="dropdown-item" 
                                        href="#root" 
                                        key={result.id}
                                        onClick={() => props.onClick(result)}
                                    >{result.displayAs}</a>
                                )
                            })
                        }                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstanceSelector;