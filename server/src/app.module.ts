import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
  //   GraphQLModule.forRoot({
  //   autoSchemaFile: 'schema.gql',
  // }),
  MikroOrmModule.forRoot({
    autoLoadEntities: true,
    clientUrl: 'postgresql://postgres:example@localhost:5432/webdev',
    type: 'postgresql',
  }),
CatsModule, DogsModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
