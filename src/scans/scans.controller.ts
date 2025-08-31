import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ScansService } from './scans.service';
import { CreateScanDto } from './dto/create-scan.dto';
import { UpdateScanDto } from './dto/update-scan.dto';
import { Scan } from './schemas/scan.schema';

@ApiTags('scans')
@Controller('scans')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Crear un nuevo escaneo',
    description: 'Registra un nuevo escaneo de código QR en el sistema'
  })
  @ApiBody({ type: CreateScanDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Escaneo creado exitosamente',
    type: Scan 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos de entrada inválidos' 
  })
  create(@Body() createScanDto: CreateScanDto) {
    return this.scansService.create(createScanDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Obtener todos los escaneos',
    description: 'Recupera una lista de todos los escaneos registrados en el sistema'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de escaneos obtenida exitosamente',
    type: [Scan]
  })
  findAll() {
    return this.scansService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Obtener un escaneo por ID',
    description: 'Recupera un escaneo específico usando su ID'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'ID del escaneo',
    example: '507f1f77bcf86cd799439011'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Escaneo encontrado',
    type: Scan 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Escaneo no encontrado' 
  })
  findOne(@Param('id') id: string) {
    return this.scansService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Actualizar un escaneo',
    description: 'Actualiza parcialmente los datos de un escaneo existente'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'ID del escaneo a actualizar',
    example: '507f1f77bcf86cd799439011'
  })
  @ApiBody({ type: UpdateScanDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Escaneo actualizado exitosamente',
    type: Scan 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Escaneo no encontrado' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos de entrada inválidos' 
  })
  update(@Param('id') id: string, @Body() updateScanDto: UpdateScanDto) {
    return this.scansService.update(+id, updateScanDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Eliminar un escaneo',
    description: 'Elimina un escaneo del sistema usando su ID'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'ID del escaneo a eliminar',
    example: '507f1f77bcf86cd799439011'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Escaneo eliminado exitosamente' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Escaneo no encontrado' 
  })
  remove(@Param('id') id: string) {
    return this.scansService.remove(+id);
  }
}
