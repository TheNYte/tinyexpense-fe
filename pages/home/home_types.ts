import {CategoryColors} from '#root/common/common_constants';

export interface Expenses {
  id: number;
  categoryId: number;
  expenseDescription: string;
  amount: number;
  currency: string;
  dateTime: string;
  color: CategoryColors;
}
