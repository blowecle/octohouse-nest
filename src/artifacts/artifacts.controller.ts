import { Injectable } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { Request } from 'express';

@Controller()
export class ArtifactsController {
  constructor(private artifactsService: ArtifactsService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<any> {
    return this.artifactsService.find();
  }

  // @Get('/artifacts/:id')
  // findOne(@Param('id') id: number) {
  //   return this.artifactsService.findOneBy(id);
  // }
}
