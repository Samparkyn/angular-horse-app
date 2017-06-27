import { Component, OnInit }  from '@angular/core';
import { Horse }              from './horse';
import { HorseService }       from './horse.service'
import { Router }             from '@angular/router'

// horses: Horse[];

@Component({
  selector: 'my-horses',
  templateUrl: './horses.component.html',
  styleUrls: [ './horses.component.css' ]
})

export class HorsesComponent implements OnInit {
  horses: Horse[];
  selectedHorse: Horse;

  constructor(
    private router: Router,
    private horseService: HorseService) { }

    getHorses(): void {
      this.horseService.getHorses().then(horses => this.horses = horses);
    }

    ngOnInit(): void {
      this.getHorses();
    }

    onSelect(horse: Horse): void {
      this.selectedHorse = horse;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHorse.id]);
    }
}
