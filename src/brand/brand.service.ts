import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Brand } from './schemas/brand.schema';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name)
    private brandModel: mongoose.Model<Brand>,
  ) {}

  async findAll(): Promise<Brand[]> {
    const brands = await this.brandModel.find();
    return brands;
  }

  async create(brand: Brand): Promise<Brand> {
    const res = await this.brandModel.create(brand);
    return res;
  }
}
