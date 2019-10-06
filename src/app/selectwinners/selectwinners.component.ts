import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contestants } from '../models/contestants';

@Component({
  selector: 'app-selectwinners',
  templateUrl: './selectwinners.component.html',
  styles: []
})
export class SelectwinnersComponent {
  @Input() contestants: Contestants[] = [];
  winnersArray: any;
  numberOfWinners: number;
  selectmode = true;
  err: string;

  constructor() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.numberOfWinners > this.contestants.length) {
        this.err = 'Number can\'t be higher than total contestants';
        return;
      }
      const winners = [];
      const [...contestants] = this.contestants;

      function get_rand() {
          const random = Math.floor(Math.random() * contestants.length);
          if (!winners.includes(random)) {
              winners.push(random);
              return random;
          } else {
              get_rand();
          }
      }

      for (let i = 0; i < this.numberOfWinners; i++) {
          get_rand();
      }

      this.winnersArray = winners;
      this.selectmode = false;
    }
    console.log(this.winnersArray);
  }

  back() {
    this.selectmode = !this.selectmode;
  }
}
