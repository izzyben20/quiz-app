import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleNumberChange, handleScoreChange } from '../redux/actions';

const FinalScore = () => {
  const { score } = useSelector(state => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBackToHome = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleNumberChange(50));
    history.push('/');
  };

  return (
    <Box mt={30}>
      <Typography 
        variant='h3'
        fontWeight='bold'
        mb={3}
      >
        Final Score {score}
      </Typography>
      <Button 
        variant='outlined'
        color='warning'
        onClick={handleBackToHome}  
      >
        Back to home
      </Button>
    </Box>
  );
};

export default FinalScore;
