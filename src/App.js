import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Navigation } from './elements/Navigation';
import Dashboard from './components/Dashboard';

function App() {

    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact component={Dashboard} path="/" />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
