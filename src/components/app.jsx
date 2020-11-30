import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Popular from "../pages/popular.jsx";
import Battle from "../pages/battle.jsx";
import BattleResult from '../pages/battleResult.jsx'



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="Nav">
                        <Link to="/">Popular</Link>
                        <Link to="/battle" style={{ marginLeft: '20px' }}>Battle</Link>
                    </div>
                    <hr />
                    <Route path="/" exact component={Popular} ></Route>
                    <Route path="/battle" exact component={Battle} ></Route>
                    <Route path="/battle/:name" exact component={BattleResult} ></Route>
                </div>
            </Router>
        )
    };

}
export default hot(App);