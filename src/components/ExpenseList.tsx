import React from 'react';
import { Trash2 } from 'lucide-react';
import { Expense, defaultCategories } from '../types/expense';
import { getIconComponent } from '../utils/icons';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getCategoryDetails = (categoryId: string) => {
    return defaultCategories.find((cat) => cat.id === categoryId) || defaultCategories[5];
  };

  return (
    <div className="space-y-4">
      {expenses.map((expense) => {
        const category = getCategoryDetails(expense.category);
        const IconComponent = getIconComponent(category.icon);

        return (
          <div
            key={expense.id}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${category.color} bg-opacity-10`}>
                <IconComponent className={`h-5 w-5 ${category.color}`} />
              </div>
              <div>
                <h3 className="font-medium">{expense.description}</h3>
                <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">${expense.amount.toFixed(2)}</span>
              <button
                onClick={() => onDelete(expense.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
      {expenses.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {React.createElement(getIconComponent('Receipt'), {
            className: 'mx-auto h-12 w-12 mb-4'
          })}
          <p>No expenses yet. Add your first expense above!</p>
        </div>
      )}
    </div>
  );
}