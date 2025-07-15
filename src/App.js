import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import IssueDetails from './IssueDetails';
import NotFound from './NotFound';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <h1>GitHub Issue Tracker</h1>
        <div className="content">
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
