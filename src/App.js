import React from 'react';
import { Container, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FinalScore from './pages/FinalScore';
import Home from './pages/Home';
import Questions from './pages/Questions';
import { Box } from '@mui/system';

const App = () => {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/questions' component={Questions} exact/>
            <Route path='/score' component={FinalScore} exact/>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
