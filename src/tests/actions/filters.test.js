import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, setTextFilter, sortByAmount } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


test('should generate set text filter with text value', () => {
    const text = 'something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TXT_FILTER',
        text
    })
})


test('should generate set text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TXT_FILTER',
        text: ''
    })
})

test('should set sort by amount action', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
})

test('should set sort by date action', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
})