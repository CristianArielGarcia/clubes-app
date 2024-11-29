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
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('SUPABASE_URL'),
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
