import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes"

const loading = () => <div className="loader"></div>;

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        DefaultLayout
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    )
  }
}
