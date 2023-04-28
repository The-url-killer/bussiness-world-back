import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import { BD_PATH_ENV } from './constants/env.constant';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [BD_PATH_ENV], isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    BoardModule,
  ],
})
export class AppModule {}
