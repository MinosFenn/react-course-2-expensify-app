import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExp, removeExp, history, wrapper;

beforeEach(() => {
     editExp = jest.fn();
     removeExp = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(
     <EditExpensePage 
     editExp={editExp} 
     removeExp={removeExp} 
     history={history} 
     expense={expenses[2]}
     />
     );
})

test('should render EdiExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle EdiExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExp).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})


test('should handle RemoveExp', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExp).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
})