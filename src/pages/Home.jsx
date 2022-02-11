import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

const Home = () => {
  const { response, error, loading } = useAxios({ url: '/api_category.php' });
  
  if(loading) {
    return (
      <Box mt={35}>
        <CircularProgress color='warning' />
      </Box>
    )
  };

  if(error) {
    return (
      <Typography variant='h6' color='red'>Something went wrong!, try again</Typography>
    )
  }

  const selectedDifficulty = [
    { id: 'easy', name: 'Easy'},
    { id: 'medium', name: 'Medium'},
    { id: 'hard', name: 'Hard'}
  ];

  const selectedType = [
    { id: 'multiple', name: 'Multiple Choice'},
    { id: 'boolean', name: 'True/False'}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label='Category' />
        <SelectField options={selectedDifficulty} label='Difficulty' />
        <SelectField options={selectedType} label='Type' />
        <TextFieldComp />

        <Box mt={3} width='100%'>
          <Button 
            fullWidth 
            color='warning' 
            variant='contained' 
            type='submit'
          >
            Get Started
          </Button>
        </Box>
      </form>
    </>
    );
};

export default Home;
