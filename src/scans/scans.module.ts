import { Module } from '@nestjs/common';
import { ScansService } from './scans.service';
import { ScansController } from './scans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scan } from './entities/scan.entity';
import { ScanSchema } from './schemas/scan.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Scan.name, schema: ScanSchema }])],
  controllers: [ScansController],
  providers: [ScansService],
})
export class ScansModule {}
