import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const result = {
      query: 'Take me to kebab',
      photos: [
        'https://picsum.photos/200/200?v=1',
        'https://picsum.photos/200/200?v=2',
        'https://picsum.photos/200/200?v=3',
        'https://picsum.photos/200/200?v=4',
        'https://picsum.photos/200/200?v=5'
      ],
      title: 'Girstučio kebabai',
      address: 'Kovo 11-osios g. 22, Kaunas 51349',
      phone: '+3700000001',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
    
    return {result};

  }
}