import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, Button, CircularProgress } from '@mui/material';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import { decode } from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
  const { 
    question_category,
    question_difficulty,
    question_type,
    number_of_questions,
    score
  } = useSelector( state => state);

  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${number_of_questions}`;

  if(question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
    }
  },[response, questionIndex])

  if(loading) {
    return (
      <Box mt={25}>
        <CircularProgress color='warning' />
      </Box>
    )
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1))
    }

    if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      history.push('/score')
    }
  }

  return (
    <Box mt={10}>
      <Typography variant='h4'>Questions {questionIndex + 1} </Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map(( data, id) => (
        <Box key={id} mt={2} width='100%'>
          <Button 
            variant='contained' 
            fullWidth 
            size='small'
            color='warning'
            onClick={handleClickAnswer}
          >
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>Score: {score} / {response.results.length}</Box>
    </Box>
  );
};

export default Questions;
