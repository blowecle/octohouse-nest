import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistDto } from './dto/artist.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { NotFoundException } from '@nestjs/common';
import { ApproveArtistDto } from './dto/approve-artist.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Serialize(ArtistDto)
@Controller('artists')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createArtist(@Body() body: CreateArtistDto) {
    return await this.artistsService.create(body);
  }

  @Get()
  async findArtists() {
    return await this.artistsService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const artist = await this.artistsService.findOneBy(parseInt(id));
    if(!artist){
      throw new NotFoundException('Artist not found');
    }
    return artist
  }

  @Patch(':id/approve')
  @UseGuards(AuthGuard)
  approveArtist(@Param('id') artistId: number, @Body() body: ApproveArtistDto) {
    return this.artistsService.approveArtist(artistId, body.approved);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() body: UpdateArtistDto) {
    return await this.artistsService.update(parseInt(id), body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string) {
    return await this.artistsService.remove(parseInt(id));
  }
}
