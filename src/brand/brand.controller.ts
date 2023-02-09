import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './schemas/brand.schema';

@Controller('api/v1/brand_sales_daily')
export class BrandController {
  constructor(private brandService: BrandService) { }

  @Get()
  async getAllBrands(): Promise<Brand[]> {
    return this.brandService.findAll();
  }

  @Post()
  async createBrand(@Body() brand: CreateBrandDto,): Promise<Brand> {
    return this.brandService.create(brand);
  }

}
