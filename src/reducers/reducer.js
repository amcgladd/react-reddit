import defaultState from './defaultState';

export default (state = defaultState, action) => {
  switch(action.type){
  case 'ADD_CLICK':
    const newNumberOfClicks = state.numberOfClicks + 1;
    const newState = {
      numberOfClicks: newNumberOfClicks
    };
    return newState;
  default:
    return state;
  }
};
