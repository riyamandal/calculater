import React from 'react';

function ClearButton(props){
    return (
            <button onClick={() => props.handleClear()} className={props.class} >{props.value}</button>
    )
};
export default ClearButton;


//onClick={() => this.props.handleClick(this.props.children)}