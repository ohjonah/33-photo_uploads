import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../landing';
import Settings from '../settings';

import * as util from '../../lib/util.js';
import {tokenSet} from '../../action/auth-actions.js'

class App extends React.Component {

  render() {
    return (
      <div className='cfgram'>
          <BrowserRouter>
            <section>
              <header>
                <h1>cfgram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                    <li><Link to='/settings'>settings</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={Landing} />
              <Route exact path='/settings' component={Settings} />
            </section>
          </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
