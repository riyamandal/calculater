import React from 'react';

function ClearButtonByOne(props){
    return (
            <button onClick={() => props.handleClear()} className={props.class} >{props.value}</button>
    )
};
export default ClearButtonByOne;


//onClick={() => this.props.handleClick(this.props.children)}