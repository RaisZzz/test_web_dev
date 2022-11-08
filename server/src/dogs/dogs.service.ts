import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Dog } from './dog';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog)
        private readonly photoRepository: EntityRepository<Dog>,
      ) {}
}