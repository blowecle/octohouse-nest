import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ArtifactsController } from './artifacts/artifacts.controller';
import { ArtifactsService } from './artifacts/artifacts.service';
import { ArtistsModule } from './artists/artists.module';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsService } from './artists/artists.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artifact } from './artifacts/entities/artifact.entity';
import { Artist } from './artists/entities/artist.entity';
import { User } from './users/entities/users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
  }), 
  ArtifactsModule, 
  ArtistsModule, 
  UsersModule, 
  // TypeOrmModule.forRoot({
  //   type: 'sqlite',
  //   database: 'db.sqlite',
  //   entities: [Artifact, Artist, User],
  //   synchronize: true,
  // })],
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'sqlite',
      database: configService.get<string>('DB_NAME'),
      synchronize: true,
      entities: [Artifact, Artist, User],
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
