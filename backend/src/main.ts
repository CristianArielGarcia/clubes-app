import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const configService = app.get(ConfigService);
  const HOST = configService.get<string>('HOST', 'localhost'); // Default to localhost if not found
  const PORT = configService.get<number>('PORT', 3001); // Default to 3001 if not found

  await app.listen(PORT, '0.0.0.0');

  app
    .getHttpAdapter()
    .getInstance()
    .log.info(`Server listening at http://${HOST}:${PORT}`);
}
bootstrap();
