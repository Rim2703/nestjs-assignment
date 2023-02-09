import { TransactionType } from '../schemas/brand.schema';

export class CreateBrandDto {
  readonly date: Date;
  readonly brand: string;
  readonly transactionType: TransactionType;
  readonly totalOrders: number;
  readonly totalOrderValue: number;
  readonly grossMarginPercentage: number;
}
