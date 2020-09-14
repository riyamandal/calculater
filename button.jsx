import React from 'react';

function Button(props){
    return (
            <button onClick={() => props.handleClick(props.value)} className={props.class} >{props.value}</button>
    )
};
export default Button;


//onClick={() => this.props.handleClick(this.props.children)}