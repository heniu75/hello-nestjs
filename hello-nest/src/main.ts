import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // tslint:disable-next-line:no-console
  console.log(`${new Date().toISOString()} App listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
