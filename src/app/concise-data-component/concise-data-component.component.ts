import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-concise-data-component',
  templateUrl: './concise-data-component.component.html',
  styleUrls: ['./concise-data-component.component.css']
})
export class ConciseDataComponentComponent implements OnInit {

  totalCases:number;
  totalDeaths=70;
  totalCured = 7;
  tempArray = [];
  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {
    /*this.dataService.getLatestConsisedData().forEach((element) => {
      if (element.key.indexOf("total_confirmed_cases") !== 0){
       this.totalCases = element.value;
      }
    });*/
    console.log(this.dataService.getOnlySpecificData());
  }

}
