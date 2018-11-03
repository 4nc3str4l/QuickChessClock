import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'clock';

  started = false;
  player1Seconds = 1000 * 60 * 5;
  player2Seconds = 1000 * 60 * 5;

  player1Time = "";
  player2Time = "";

  gameTime = 5;

  turn = 1;
  

  constructor(){
    this.player1Time = this.formatSeconds(this.player1Seconds);
    this.player2Time = this.formatSeconds(this.player2Seconds);
  }

  ngOnInit(){
    setInterval(() => {
      if(this.started){
        if(this.turn == 1){
          this.player1Seconds-=10;
          this.player1Time = this.formatSeconds(this.player1Seconds);
        }else if(this.turn == 2){
          this.player2Seconds-=10;
          this.player2Time = this.formatSeconds(this.player2Seconds);
        }
      }

      if(this.player1Seconds == 0 || this.player2Seconds == 0){
        alert(this.turn == 1 ? "Player 1 Lost!" : "Player 2 Lost!");
        this.started = false;
      }

    }, 10);
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  formatSeconds(milliseconds: number) : string{
    var seconds = milliseconds / 1000;
    return this.pad(Math.floor(seconds / 60), 2) + ":" + this.pad(Math.floor(seconds) %  60, 2); 
  }

  startStop(): void{
    this.started = !this.started;
  }

  changeTurn(turn: number): void{
    this.turn = turn;
  }

  reset(): void{
    this.player1Seconds = this.gameTime * 60 * 1000;
    this.player2Seconds = this.player1Seconds;
    this.turn = 1;
    this.player1Time = this.formatSeconds(this.player1Seconds);
    this.player2Time = this.formatSeconds(this.player2Seconds);
    this.started = false;
  }
}
