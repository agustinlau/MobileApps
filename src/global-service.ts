import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {
    constructor() {
    }
    private items = [
      'Runner Warm-up',
      'Easy Stretching',
      'Around the House',
      '15 Intense Minutes',
    ];

    getItems() {
      return this.items;
    }
}
