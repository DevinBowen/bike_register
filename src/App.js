import React, { Component } from 'react';
import routes from './routes';
import './css/reset.css';


class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
