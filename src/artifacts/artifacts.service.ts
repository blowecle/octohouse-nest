import { Inject, Injectable } from '@nestjs/common';
import { CreateArtifactDto } from './dto/create-artifact.dto';
import { UpdateArtifactDto } from './dto/update-artifact.dto';
import { Artifact } from './entities/artifact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArtifactsService {
  constructor(@InjectRepository(Artifact) private repo: Repository<Artifact>) {}

  find() {
    return this.repo.find();
  }
}
