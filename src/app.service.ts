import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/entities/users.entity';
import { Artist } from './artists/entities/artist.entity';
import { Artifact } from './artifacts/entities/artifact.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
    @InjectRepository(Artifact) private artifactRepo: Repository<Artifact>,
  ) {}

  async seed() {
  const artist1 = this.artistRepo.create({
    name: 'John Doe',
    blurb: 'John Doe is a great artist',
    approved: true,
  });
  await this.artistRepo.save(artist1);
  
  const artist2 = this.artistRepo.create({
    name: 'John Doe 2',
    blurb: 'John Doe 2 is a great artist',
    approved: true,
  });
  await this.artistRepo.save(artist2);
  
  const artifact1 = this.artifactRepo.create({
    name: 'John Doe\'s Art',
    blurb: 'John Doe\'s Art is great',
    images: ['https://i.imgur.com/0y8Ftya.jpg', 'https://i.imgur.com/0y8Ftya.jpg'],
    artistId: [1, 2],
    artistDescription: ['John Doe is a great artist', 'John Doe 2 is a great artist'],
    approved: true,
  });
  await this.artifactRepo.save(artifact1);

  const artifact2 = this.artifactRepo.create({
    name: 'John Doe\'s Art 2',
    blurb: 'John Doe\'s Art 2 is great',
    images: ['https://i.imgur.com/0y8Ftya.jpg', 'https://i.imgur.com/0y8Ftya.jpg'],
    artistId: [1],
    approved: true,
  });
  await this.artifactRepo.save(artifact2);
  
  
  const user = this.userRepo.create({
    email: 'blowecle@gmail.com',
    password: 'password',
    admin: true,
  });
  
  await this.userRepo.save(user);
  
  artifact1.artists = [artist1, artist2];
  await this.artifactRepo.save(artifact1);

  artifact2.artists = [artist1];
  await this.artifactRepo.save(artifact2);

  }

}
