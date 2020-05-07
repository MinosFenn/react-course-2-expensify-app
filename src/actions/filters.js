// SET_TXT_FILTER

export const setTextFilter = (text = '') => ({
type: 'SET_TXT_FILTER',
text 
});
// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = (number) => ({
    type: 'SORT_BY_AMOUNT',
    number
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});