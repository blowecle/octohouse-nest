import { Module } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ArtifactsController } from './artifacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artifact } from './entities/artifact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artifact])], //Create a new repository for Artifacts
  controllers: [ArtifactsController],
  providers: [ArtifactsService],
})
export class ArtifactsModule {}
