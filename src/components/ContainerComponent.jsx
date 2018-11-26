import React from 'react';
import { connect } from 'react-redux';
import PresentationalComponent from './PresentationalComponent';
import PropTypes from 'prop-types';

class ContainerComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleMutateStateFunction = this.handleMutateStateFunction.bind(this);
  }

  handleMutateStateFunction() {
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_CLICK',
    };
    dispatch(action);
  }

  render(){
    return (
      <div>
        <PresentationalComponent
          onMutateStateFunction={this.handleMutateStateFunction}
          clicks={this.props.numberOfClicks}
        />
      </div>
    );
  }

}

ContainerComponent.propTypes = {
  numberOfClicks: PropTypes.number
};

const mapStateToProps = state => {
  return {
    numberOfClicks: state.numberOfClicks
  };
};

export default connect(mapStateToProps)(ContainerComponent);
