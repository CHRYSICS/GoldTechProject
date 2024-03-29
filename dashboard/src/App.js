import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <h1>GoldTech Adminstration API</h1>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path='/dashboard'>
                            <Dashboard />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
    
}

export default App;