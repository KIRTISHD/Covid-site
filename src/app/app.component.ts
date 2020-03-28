import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ind-covid19-proj';
  
  conciseData: any = [];
  constructor(private dataService: DataServiceService){
    this.conciseData = dataService.getLatestConsisedData().rows.reverse().slice(0,6);
    console.log(this.conciseData);

  }

  
}
