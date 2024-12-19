import React from 'react';
import { Expense, defaultCategories } from '../types/expense';
import { getIconComponent } from '../utils/icons';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals = expenses.reduce((acc, expense) => {
    const categoryId = expense.category;
    acc[categoryId] = (acc[categoryId] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Total Expenses</h2>
        <p className="text-3xl font-bold text-indigo-600">${totalExpenses.toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        {defaultCategories.map((category) => {
          const amount = categoryTotals[category.id] || 0;
          const percentage = totalExpenses ? (amount / totalExpenses) * 100 : 0;
          const IconComponent = getIconComponent(category.icon);

          return (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`p-1.5 rounded-full ${category.color} bg-opacity-10`}>
                  <IconComponent className={`h-4 w-4 ${category.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </div>
              <div className="text-sm text-gray-500">
                ${amount.toFixed(2)} ({percentage.toFixed(1)}%)
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}