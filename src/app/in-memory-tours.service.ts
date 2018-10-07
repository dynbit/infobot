  import { InMemoryDbService } from 'angular-in-memory-web-api';

  import * as allTours from './tours.json';

  export class InMemoryToursService implements InMemoryDbService {
    createDb() {
      return { 'tours': allTours }
    }
  }