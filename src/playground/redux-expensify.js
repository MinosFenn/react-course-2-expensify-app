import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Filter creation 




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -100000 }));
// const expThree = store.dispatch(addExpense({ description: 'weed', amount: 1200 }));

// store.dispatch(removeExp({ id: expOne.expense.id }));
// store.dispatch(editExp(expTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(sortByAmount());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

const demoState = {
expenses: [{
    id: 'ppp',
    description: 'Rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 0
}],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
    endDate: undefined    }
};

