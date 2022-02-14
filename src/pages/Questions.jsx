import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import useAxios from '../hooks/useAxios';

const Questions = () => {
  let apiUrl = `/api.php?amount=10`;

  const { response, loading } = useAxios({ url: apiUrl });
  console.log(response);

  return (
    <Box fullWidth>
      <Typography variant='h4'>Questions 1</Typography>
      <Typography mt={5}>This is the question?</Typography>
      <Box mt={2}>
        <Button variant='contained'>Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant='contained'>Answer 2</Button>
      </Box>
      <Box mt={4}>
        Score: 6 / 10
      </Box>
    </Box>
  );
};

export default Questions;
