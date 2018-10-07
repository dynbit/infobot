import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as museumsJson from './museums.json';
import * as toursJson from './tours.json';
import * as kebabsJson from './kebabs.json';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'random'   : [],
      'kebabs'   : kebabsJson,
      'tours'    : toursJson,
      'museums'  : museumsJson,
    };
  }
}