import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post'

function PostList(props){

  const postListStyles = {
    marginTop: '20px',
    paddingLeft: '20px'
  }

  return (
    <div style={postListStyles}>
      {Object.keys(props.masterPostList).map(function(postId, index) {
        var post = props.masterPostList[postId];
        return <Post voteCount={post.voteCount}
                     imgURL={post.imgURL}
                     title={post.title}
                     timeStamp={post.timeStamp}
                     author={post.author}
                     Id={post.Id}
                     key={index}/>
      })}
    </div>
  );
}

export default PostList;
