import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScansModule } from './scans/scans.module';
import { ConfigModule } from '@nestjs/config';
import { mongo, Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || ""),
    ScansModule,
  ],

})
export class AppModule {}