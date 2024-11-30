import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Club Management API')
  .setDescription('API for Club Management')
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    },
    'access-token', 
  )
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  const HOST = configService.get<string>('HOST', 'localhost'); // Default to localhost if not found
  const PORT = configService.get<number>('PORT', 3001); // Default to 3001 if not found

  await app.listen(PORT, '0.0.0.0');

  app.enableCors({
    origin: '*', // Or specify your allowed origins
    allowedHeaders: 'Authorization', // Make sure Authorization header is allowed
  });

  console.log(`Server listening at http://${HOST}:${PORT}`);
}
bootstrap();
