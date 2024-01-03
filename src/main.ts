import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.context);
  const port = process.env.port || 4005;
  await app.listen(port);
}
bootstrap();
