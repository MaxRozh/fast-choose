
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import SectionApp from './app/SectionApp';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <div className="section-app">
                    <Switch>
                        <Route
                            exact
                            path="/section"
                            component={SectionApp}
                        />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
