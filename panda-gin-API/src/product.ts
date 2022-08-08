import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Product {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly title: string;
  @IsNumber() readonly price: number;
  @IsString() readonly description: string;
  @IsNumber() readonly amount: number;
  @IsString() readonly category: string;
  @IsString() readonly image: string;
}
