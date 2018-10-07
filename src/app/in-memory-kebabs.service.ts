  import { InMemoryDbService } from 'angular-in-memory-web-api';

  import * as allKebabs from './kebabs.json';

  export class InMemoryKebabsService implements InMemoryDbService {
    createDb() {
      return { 'kebabs': allKebabs }
    }
  }