import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Chapter from './routes/Chapter';
import ChapterList from './routes/ChapterList';
import Nav from './components/Nav';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/chapter/:id" component={Chapter} />
          <Route path="/chapterlist" component={ChapterList} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
