import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsBoolean,
} from 'class-validator';

export class Product {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly category: string;
  @IsString() readonly title: string;
  @IsString() readonly description: string;
  @IsString() readonly price: string;
  @IsBoolean() readonly outOfStock: boolean;
  @IsString() readonly discount: string;
  @IsBoolean() readonly limitedEdition: boolean;
  @IsArray() readonly images: Array<string>;
  @IsString() readonly imageThumbnail: string;
  @IsString() readonly text: string;
  @IsArray() readonly formats: Array<{
    id: number;
    text: string;
    promotion?: boolean;
  }>;
}
