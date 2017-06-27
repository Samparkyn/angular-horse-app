import { Component, OnInit } from '@angular/core';

import { Horse } from './horse'
import { HorseService } from './horse.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  horses: Horse[] = [];

  constructor(private horseService: HorseService) { }

  ngOnInit(): void {
    this.horseService.getHorses()
      .then(horses => this.horses = horses.slice(0, 4));
      console.log(this.horses);
  }
}
