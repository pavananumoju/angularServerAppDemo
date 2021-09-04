import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  startGame: boolean = false;
  counter:number = 0;
  @Output() numberEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGameControl(){
      this.interval = setInterval(() => {
        this.numberEvent.emit(this.counter + 1);
        this.counter++
      },500);
    this.startGame = !this.startGame;
    // this.controlName = 'Stop'
  }

  pauseGameControl(){
    
    clearInterval(this.interval);
    this.startGame = !this.startGame;
  }

}
