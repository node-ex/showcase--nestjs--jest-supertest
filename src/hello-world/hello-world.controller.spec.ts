import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from '@/hello-world/hello-world.controller';
import { HelloWorldService } from '@/hello-world/hello-world.service';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe(HelloWorldController.name, () => {
  let helloWorldController: HelloWorldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService],
    }).compile();

    helloWorldController = app.get<HelloWorldController>(HelloWorldController);
  });

  describe(HelloWorldController.prototype.greet.name, () => {
    it('should return "Hello World!"', () => {
      expect(helloWorldController.greet()).toBe('Hello World!');
    });
  });
});
