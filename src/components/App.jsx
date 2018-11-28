import React from 'react';
import PostList from './PostList';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <PostList
                masterPostList={this.props.masterPostList}
              />
            }
          />
          <Route
            component={Error404}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // let newObject = {};
  // Object.keys(state.masterPostList).map((post) => {
  //   console.log(state.masterPostList[post]);
  // });
  return {
    masterPostList: state.masterPostList
  };
}

App.propTypes = {
  masterPostList: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));
