import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateScanDto {
  @ApiPropertyOptional({
    description: 'ID del usuario que realiza el escaneo',
    example: '507f1f77bcf86cd799439011'
  })
  @IsOptional()
  userId: string;

  @ApiProperty({
    description: 'Código QR escaneado',
    example: 'QR_CODE_12345'
  })
  @IsNotEmpty()
  qrCode: string;

  @ApiProperty({
    description: 'Fecha y hora del escaneo',
    example: '2025-08-31T10:30:00.000Z'
  })
  @IsNotEmpty()
  scannedAt: Date;

  @ApiPropertyOptional({
    description: 'Metadatos adicionales del escaneo',
    example: { location: 'Campo A', sector: '1' }
  })
  @IsOptional()
  metadata?: Record<string, any>;
}