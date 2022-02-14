import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_NUMBERS,
    CHANGE_SCORE,
    CHANGE_TYPE
} from './actionsTypes';

export const handleCategoryChange = payload => ({
    type: CHANGE_CATEGORY,
    payload
});

export const handleDifficultyChange = payload => ({
    type: CHANGE_DIFFICULTY,
    payload
});

export const handleNumberChange = payload => ({
    type: CHANGE_NUMBERS,
    payload
});

export const handleScoreChange = payload => ({
    type: CHANGE_SCORE,
    payload
});

export const handleTypeChange = payload => ({
    type: CHANGE_TYPE,
    payload
});