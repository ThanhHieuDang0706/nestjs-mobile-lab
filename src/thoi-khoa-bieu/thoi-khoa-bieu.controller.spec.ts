import { Test, TestingModule } from '@nestjs/testing';
import { ThoiKhoaBieuController } from './thoi-khoa-bieu.controller';

describe('ThoiKhoaBieuController', () => {
  let controller: ThoiKhoaBieuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThoiKhoaBieuController],
    }).compile();

    controller = module.get<ThoiKhoaBieuController>(ThoiKhoaBieuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
