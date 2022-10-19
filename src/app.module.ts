import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }), 
    UsersModule, ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
