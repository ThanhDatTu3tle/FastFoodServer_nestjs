import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }), 
    ProductsModule, CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
