import { Component , OnInit }  from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';

import { Horse }                      from './horse';
import { HorseService }               from './horse.service'
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: [ './horse-detail.component.css' ]
})
export class HorseDetailComponent implements OnInit {
  horse: Horse;

  constructor(
  private horseService: HorseService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.horseService.getHorse(+params['id']))
    .subscribe(horse => this.horse = horse);
  }

  goBack(): void {
    this.location.back();
  }

}
