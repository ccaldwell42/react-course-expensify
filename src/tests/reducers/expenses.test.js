import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'a new expense',
    amount: 3200,
    createdAt: 0,
    note: ''
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense by id', () => {
  const note = 'adding a testing note';
  const updatedExpense = {
    ...expenses[2],
    note 
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: updatedExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], updatedExpense ]);
});

test('should not edit expenses if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'new stuff'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});