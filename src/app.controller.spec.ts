import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return `<html><head><title>NestJS 9</title></head><body><p>Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)</p></body></html>`',
      () => { expect(appController.getHello()).toBe(`<html>
        <head>
          <title>NestJS 9</title>
        </head>
        <body>
          <p>Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)</p>
        </body>
      </html>`);
    });
  });
});
