export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export type ExpenseCategory = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export const defaultCategories: ExpenseCategory[] = [
  { id: '1', name: 'Food', icon: 'utensils', color: 'text-orange-500' },
  { id: '2', name: 'Transport', icon: 'car', color: 'text-blue-500' },
  { id: '3', name: 'Shopping', icon: 'shopping-bag', color: 'text-purple-500' },
  { id: '4', name: 'Bills', icon: 'receipt', color: 'text-red-500' },
  { id: '5', name: 'Entertainment', icon: 'tv', color: 'text-green-500' },
  { id: '6', name: 'Other', icon: 'more-horizontal', color: 'text-gray-500' },
];