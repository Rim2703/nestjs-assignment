import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TransactionType {
  TRADING = 'trading',
  FACILITATION = 'facilitation',
}

@Schema({
  timestamps: true,
})

export class Brand {
  @Prop()
  date: Date;

  @Prop()
  brand: string;

  @Prop()
  transactionType: TransactionType;

  @Prop()
  totalOrders: number;

  @Prop()
  totalOrderValue: number;

  @Prop()
  grossMarginPercentage: number;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
