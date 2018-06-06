import React from 'react';
import PropTypes from 'prop-types';
import style from "./Title";

const Title = props => 
<div> 
    <h1>To do App</h1> 
    <h3>Tasks to do {props.number}</h3>
</div>

export default Title;