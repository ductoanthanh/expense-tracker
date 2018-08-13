import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000}));

const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 3000, createdAt:  -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 100 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'asdasdgvsd',
        description: 'January rent',
        note: 'This was the final paymnet for address',
        amount: 54100,
        createdAt: 0
    }],
    filters: {
        text: 'rent', 
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
}

// console.log({
//     ...user,
//     location: 'HCM',
//     name: 21
// });