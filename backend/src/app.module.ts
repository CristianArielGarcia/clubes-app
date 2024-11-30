import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SocioModule } from './entities/socio/socio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ defaultStrategy: 'supabase-auth' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'aws-0-us-east-1.pooler.supabase.com',
        database: 'postgres',
        port: 6543,
        username: 'postgres.dozmmkcizzatqotxfzop',
        password: process.env.SUPABASE_PASSWORD,
        synchronize: true, // Solo para desarrollo
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    SocioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
