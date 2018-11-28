import defaultState from './defaultState';

export default (state = defaultState, action) => {
  switch(action.type){
  case 'UP_VOTE':

  let newPost = Object.assign({}, state);
  newPost.masterPostList[action.currentPostId].voteCount = newPost.masterPostList[action.currentPostId].voteCount + 1;
  console.log(newPost);

  // console.log(state);
  // let newVoteCount = state.masterPostList[action.currentPostId].voteCount;
  // newVoteCount += 1;
  //
  //   let newPost = Object.assign({}, state.masterPostList[action.currentPostId], {
  //       voteCount: newVoteCount
  //   });
  //   console.log(action.currentPostId)
  //   let newState = Object.assign({}, state, {
  //     [action.currentPostId]: newPost
  //   });
  //
  //   console.log(newState);
    return newPost;
  case 'DOWN_VOTE':
    console.log(action);
  default:
    return state;
  }
};
