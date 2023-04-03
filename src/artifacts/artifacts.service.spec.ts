import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactsService } from './artifacts.service';

describe('ArtifactsService', () => {
  let service: ArtifactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtifactsService],
    }).compile();

    service = module.get<ArtifactsService>(ArtifactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
