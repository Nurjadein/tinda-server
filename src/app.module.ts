import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // <-- import TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',       // Replace with your actual MySQL username
      password: 'root',   // Replace with your actual MySQL password
      database: 'tinda',    // Replace with your actual database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // Use only in development (auto-creates tables)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
