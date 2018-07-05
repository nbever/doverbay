import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.scss';
import Banner from './Banner';
import Welcome from './Welcome';
import Activities from './Activities';
import LinkMenu from './LinkMenu';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  closeMenu = () => {

    this.removeEventListener();

    this.setState({
      ...this.state,
      menuOpen: false
    });
  }

  menuClicked = () => {

    if ( this.state.menuOpen === true) {
      this.closeMenu();
      return;
    }

    this.setState({
      ...this.state,
      menuOpen: true
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  removeEventListener = () => {
    document.removeEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  render() {
    return (
      <Router>  
        <div className="app">
          <LinkMenu 
            open={this.state.menuOpen}
            items={
              [
                {text: 'Home', location: '/'},
                {text: 'Activities', location: '/activities'},
                {text: 'Food and Treats', location: '/food'},
                {text: 'Where is...', location: '/whereis'},
                {text: 'Tech Trouble', location: '/tech'}
              ]
            }
          />
          <Banner menuClicked={this.menuClicked}/>
    
          <Switch>
            <Route path="/activities" component={Activities} />
            <Route component={Welcome} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app'));