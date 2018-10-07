  import { InMemoryDbService } from 'angular-in-memory-web-api';

  import * as allMuseums from './museums.json';

  export class InMemoryMuseumsService implements InMemoryDbService {
    createDb() {
      return { 'museums': allMuseums }
    }
  }