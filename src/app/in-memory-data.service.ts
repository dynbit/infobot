import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as kebabs from './kebabs.json';
import * as museums from './museums.json';
import * as tours from './tours.json';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'kebabs'   : kebabs,
      'tours'    : tours,
      'museums'  : museums,
    };
  }
}