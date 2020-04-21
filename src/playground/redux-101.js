import { createStore } from 'redux';

// action generators - function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count })  => ({
    type: 'SET',
    count
});

const resetCount = () => ({
type: 'RESET',

});

// Reducers
// 1. Are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type)    {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                count: state.count - decrementBy
            };
            case 'RESET':
                return {
                    count: 0
                };
                case 'SET':
                return {
                    count: action.count
                };
            default:
                return state;

        }
    };

    const store = createStore(countReducer);

    
//     if (action.type === 'INCREMENT') {
// return {
//     count: state.count + 1
// };
//     }   else    {
//     return state;
//     }
// });
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));
store.dispatch(resetCount());

