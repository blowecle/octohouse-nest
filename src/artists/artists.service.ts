import { Injectable } from '@nestjs/common';
import { Artist } from './entities/artist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateArtistDto } from 'src/artists/dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(@InjectRepository(Artist) private repo: Repository<Artist>) {}

  async find() {
    return await this.repo.find();
  }

  async findOneBy(artistId: number) {
    return await this.repo.findOneBy({artistId})
  }

  async create(artistDto: CreateArtistDto) {
    const artist = this.repo.create(artistDto);

    return await this.repo.save(artist);
  }

  async update(artistId: number, attrs: Partial<Artist>) {
    const artist = await this.findOneBy(artistId);

    if(!artist){
      throw new NotFoundException('Artist not found');
    }

    Object.assign(artist, attrs);
    return this.repo.save(artist);
  }

  async remove(artistId: number) {
    const artist = await this.findOneBy(artistId);

    if(!artist){
      throw new NotFoundException('Artist not found');
    }

    return this.repo.remove(artist);
  }

  async approveArtist(artistId: number, approved: boolean) {
    const artist = await this.findOneBy(artistId);

    if(!artist){
      throw new NotFoundException('Artist not found');
    }

    artist.approved = approved;
    return this.repo.save(artist);
  }
}
