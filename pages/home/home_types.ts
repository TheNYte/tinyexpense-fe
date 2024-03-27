import {CategoryColors} from '#root/common/common_constants';

export interface Expenses {
  id?: number;
  categoryId?: number | string;
  categoryName?: string;
  expenseDescription: string;
  amount: number;
  currency: string;
  dateTime: string;
  color?: CategoryColors;
}

export interface CategoriesData {
  color: CategoryColors;
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
}
