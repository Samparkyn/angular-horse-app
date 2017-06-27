import { Injectable } from '@angular/core';
import { Horse } from './horse';
import { HORSES } from './mock-horses';

@Injectable()
export class HorseService {
  getHorses(): Promise<Horse[]> {
      return Promise.resolve(HORSES);
    }

  getHorse(id: number): Promise<Horse> {
      return this.getHorses()
                .then(horses => horses.find(horse => horse.id === id));
    }
}
