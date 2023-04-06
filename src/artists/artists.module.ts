import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { Artist } from './entities/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])], //Create a new repository for Artists
  controllers: [ArtistsController],
  providers: [ArtistsService]
})
export class ArtistsModule {}
