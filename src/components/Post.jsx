import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {

  const { dispatch } = props;

  // function upVoteAction() {
  //   const action = {
  //     type: 'UP_VOTE',
  //     currentPostId: props.Id
  //   }
  //   dispatch(action);
  // }

  const upVoteAction = {
    type: 'UP_VOTE',
    currentPostId: props.Id
  }

  const downVoteAction = {
    type: 'DOWN_VOTE',
    currentPostId: props.Id
  }

  const postStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  }
  const postImgStyles = {
    width: '70px',
    height: 'auto',
    margin: '0 20px'
  }

  const vertAlign = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return(
    <div style={postStyles}>
      <div style={vertAlign}>
        <i className="fas fa-arrow-up" onClick={()=> {dispatch(upVoteAction)}}></i>
        <p>{props.voteCount}</p>
        <i className="fas fa-arrow-down" onClick={()=> {dispatch(downVoteAction)}}></i>
      </div>
      <img src={props.imgURL} style={postImgStyles}/>
      <div>
        <p>{props.title}</p>
        <div>
          <p>Submitted {props.timeStamp} by {props.author}</p>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  voteCount: PropTypes.number,
  imgURL: PropTypes.string,
  title: PropTypes.string,
  timeStamp: PropTypes.string,
  author: PropTypes.string,
  Id: PropTypes.number
}

export default connect()(Post);
