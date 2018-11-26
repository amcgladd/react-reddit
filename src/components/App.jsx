import React from 'react';
import ContainerComponent from './ContainerComponent';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <div>
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <ContainerComponent />
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

export default App;
