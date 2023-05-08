import { HttpException, HttpStatus } from '@nestjs/common';
import { Errors } from './errors';

export class Error {
  sendError(error: Errors, data: object = {}) {
    throw new HttpException(
      {
        error: true,
        id: error,
        message: Errors[error],
        data,
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
