import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Schema({timestamps: true}) 
export class Scan extends Document {
  @ApiPropertyOptional({
    description: 'ID del usuario que realizó el escaneo',
    example: '507f1f77bcf86cd799439011'
  })
  @Prop({ required: false })
  userId: string;

  @ApiProperty({
    description: 'Código QR escaneado',
    example: 'QR_CODE_12345'
  })
  @Prop({ required: true })
  qrCode: string;

  @ApiProperty({
    description: 'Fecha y hora del escaneo',
    example: '2025-08-31T10:30:00.000Z'
  })
  @Prop({ required: true })
  scannedAt: Date;

  @ApiPropertyOptional({
    description: 'Metadatos adicionales del escaneo',
    example: { location: 'Campo A', sector: '1' }
  })
  @Prop({ type: Object})
  metadata: Record<string, any>;

  @ApiProperty({
    description: 'Fecha de creación del registro',
    example: '2025-08-31T10:30:00.000Z'
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Fecha de última actualización del registro',
    example: '2025-08-31T10:30:00.000Z'
  })
  updatedAt: Date;
}

export const ScanSchema = SchemaFactory.createForClass(Scan);