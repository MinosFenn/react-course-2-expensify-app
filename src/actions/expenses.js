import uuid from 'uuid'
import database from '../firebase/firebase';
import expenses from '../tests/fixtures/expenses';
// components calls action generator
// action generator returns function
// component dispatches function (?)
// Function runs (has the ability to dispatch other actions and do whatever it wants)




// ADD_EXPENSE 

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
        dispatch(addExpense({
        id: ref.key,
        ...expense
        }));
        });
    }
};

// REMOVE_EXPENSE

export const removeExp = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE

export const editExp = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});

// Manipulate redux store SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})


export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            dispatch(setExpenses(expenses));
        });
    };
};

export const startRemoveExpenses = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {

            dispatch(removeExp({ id }));
        })
    }
}


export const startEditExpense = ( id, updates ) => {
    return (dispatch, getState) => {
       const uid = getState().auth.uid
       return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExp( id, updates ));
        })
    }
}