import React from 'react';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';

const SelectField = ({ label, options }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
      setValue(e.target.value);
      switch (label) {
        case 'Category':
          dispatch(handleCategoryChange(e.target.value))
          break;
        case 'Difficulty':
          dispatch(handleDifficultyChange(e.target.value))
          break;
        case 'Type':
          dispatch(handleTypeChange(e.target.value))
          break;
        default:
          return;
      }
    }

  return (
    <Box mt={3} width='100%'>
        <FormControl fullWidth size='small'>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange} required>
                {options.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>{name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField;