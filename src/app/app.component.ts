import { Component, OnInit } from '@angular/core';
import { ContestantsService } from './contestants.service';
import { Contestants } from './models/contestants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contestants: Contestants[];
  title = 'NG E-Raffle Draw';
  errorMessage: string;

  constructor(private contestantsService: ContestantsService) {}

  ngOnInit(): void {
    this.contestantsService.getContestants().subscribe({
      next: contestants => this.contestants = contestants,
      error: err => this.errorMessage = err
    });
  }
}
