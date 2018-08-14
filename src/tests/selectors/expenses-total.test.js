import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should add up a single expense correctly', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(200);
});

test('should add up multiple expenses correctly', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(14700);
});