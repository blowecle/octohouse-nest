import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactsController } from './artifacts.controller';
import { ArtifactsService } from './artifacts.service';

describe('ArtifactsController', () => {
  let controller: ArtifactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtifactsController],
      providers: [ArtifactsService],
    }).compile();

    controller = module.get<ArtifactsController>(ArtifactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
