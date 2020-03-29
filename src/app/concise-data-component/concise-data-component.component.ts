import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-concise-data-component',
  templateUrl: './concise-data-component.component.html',
  styleUrls: ['./concise-data-component.component.css']
})
export class ConciseDataComponentComponent implements OnInit {

  totalCases: number;
  totalDeaths: number;
  totalCured: number;
  tempArray = [];
  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.tempArray = this.dataService.getOnlySpecificData();
    
    this.totalCases = this.tempArray.find(element => element.key === 'total_confirmed_cases').value;
    this.totalDeaths = this.tempArray.find(element => element.key === 'death').value;
    this.totalCured = this.tempArray.find(element => element.key === 'cured').value;
  }

}
