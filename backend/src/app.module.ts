import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { User } from './user.entity';

@Module({
  imports: [
    ProductsModule,
    AuthModule,
    UsersModule,
    CartModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
