import { Injectable } from '@nestjs/common';
import { Artifact } from './entities/artifact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ArtifactsService {
  constructor(@InjectRepository(Artifact) private repo: Repository<Artifact>) {}

  async find() {
    return await this.repo.find();
  }

  async findOneBy(artifactId: number) {
    return await this.repo.findOneBy({artifactId});
  }

  async create(name: string, blurb: string){
    const artifact = await this.repo.create({name, blurb});

    return this.repo.save(artifact);
  }

  async update(artifactId: number, attrs: Partial<Artifact>){
    const artifact = await this.findOneBy(artifactId);

    if(!artifact){
      throw new NotFoundException('Artifact not found');
    }

    Object.assign(artifact, attrs);
    return this.repo.save(artifact);
  }

  async remove(artifactId: number){
    const artifact = await this.findOneBy(artifactId);

    if(!artifact){
      throw new NotFoundException('Artifact not found');
    }

    return this.repo.remove(artifact);
  }
}
