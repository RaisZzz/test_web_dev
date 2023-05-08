import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

interface Error {
  error: string;
  message: string;
}

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = validationErrors.map((error) => {
          const errors: Error[] = Object.entries(error.constraints).map(
            (err) => {
              return {
                error: err[0],
                message: err[1],
              };
            },
          );
          return errors;
        });
        return new HttpErrorByCode[400](errors.flat());
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('WebDevelopment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`));
}

start();
