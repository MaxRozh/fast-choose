
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomeApp from './home/HomeApp';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <div className="home-app">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={HomeApp}
                        />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
