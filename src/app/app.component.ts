import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenList:number[] = []
  oddList:number[] = []
  
  eventData(eventNumber: number){
    if(eventNumber % 2 == 0){
      this.evenList.push(eventNumber);
    }else{
      this.oddList.push(eventNumber);
    }
  }
}
