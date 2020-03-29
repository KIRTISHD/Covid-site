import { Injectable } from '@angular/core';
import TotalData from '../assets/all-totals.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getLatestConsisedData(){
    //console.log(TotalData);
    //Getting only the current data
    return TotalData;
  }

  getOnlySpecificData(){
    let newData = [];

    let len = TotalData.rows.length;
    let tempData = TotalData.rows.reverse().slice(len-6,len);
    tempData.forEach(element => {
      let tempObj = {};
      tempObj["key"] = element.key[1];
      tempObj["value"] = element.value;
      newData.push(tempObj);
    });
    return newData;
  }
}
