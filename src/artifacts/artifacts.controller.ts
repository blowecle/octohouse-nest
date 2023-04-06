import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { CreateArtifactDto } from './dto/create-artifact.dto';
import { UpdateArtifactDto } from './dto/update-artifact.dto';
import { NotFoundException } from '@nestjs/common';
import { ArtifactDto } from './dto/artifact.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Serialize(ArtifactDto)
@Controller('artifacts')
export class ArtifactsController {
  constructor(private artifactsService: ArtifactsService) {}

  @Post('/create')
  createArtifact(@Body() body: CreateArtifactDto) {
    this.artifactsService.create(body.name, body.blurb);
  }

  @Get()
  async findArtifacts() {
    return await this.artifactsService.find();
  }

  @Get('/:id')
  async findArtifact(@Param('id') id: string) {
    const artifact = await this.artifactsService.findOneBy(parseInt(id));
    if (!artifact) {
      throw new NotFoundException('Artifact not found');
    }
    return artifact;
  }

  @Delete('/:id')
  async removeArtifact(@Param('id') id: string) {
    return await this.artifactsService.remove(parseInt(id));
  }

  @Patch('/:id')
  async updateArtifact(@Param('id') id: string, @Body() body: Partial<UpdateArtifactDto>) {
    return await this.artifactsService.update(parseInt(id), body);
  }
}