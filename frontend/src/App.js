import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import ArticleListScreen from './screens/ArticleListScreen'
import ArticalCreateScreen from './screens/ArticalCreateScreen';
import ArticalScreen from './screens/ArticalScreen';

function App() {
  return (
    <Router>
      <Container className="mt-5">
        <Route path='/articles/:id' component={ArticalScreen} />
        <Route path='/article/new' component={ArticalCreateScreen} />
        <Route exact path='/' component={ArticleListScreen} />
      </Container>
    </Router>
  );
}

export default App;
