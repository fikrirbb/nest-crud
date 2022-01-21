import {
  ForbiddenException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

export abstract class Exception {}

export class NotFound extends NotFoundException implements Exception {}

export class Forbidden extends ForbiddenException implements Exception {}

export class UnprocessableEntity
  extends UnprocessableEntityException
  implements Exception {}
