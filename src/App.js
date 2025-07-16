import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import IssueDetails from './IssueDetails';
import NotFound from './NotFound';

/**
 * Top level app, routes to each Component (Home, IssueDetails, NotFound)
 */
function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <div className="content">
          <h1><img src="favicon.ico" alt="Ambassador GK" height="10%" width="10%" style={{"vertical-align":"middle"}}/>GitHub Issue Tracker</h1>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/issues/:owner/:name/:id">
              <IssueDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
