import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PresentationalComponent(props){
  return (
    <div>
      <div onClick={() => {props.onMutateStateFunction();}}>Click me</div>
      <div>{props.clicks}</div>
    </div>
  );
}

PresentationalComponent.propTypes = {
  onMutateStateFunction: PropTypes.func,
  clicks: PropTypes.number
};

export default connect()(PresentationalComponent);
