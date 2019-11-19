import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-retrieveall',
  templateUrl: './retrieveall.component.html',
  styleUrls: ['./retrieveall.component.css']
})
export class RetrieveallComponent implements OnInit {
  restaurants: any = [];
  // rate: any = [{rating: "", customer:"", comment : ""}];
  enabledelete: any = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router 
    ) { }

  ngOnInit() {
    this.loadAllRestaurants();
  }
  loadAllRestaurants(){
    console.log("mine: LOAD ALL RESTAURANTS INFORMATION");
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {  
      console.log("mine: ALL RESTAURANTS LOADED");
      console.log(data);
      this.restaurants = data;
      for (const key in data) {
        var time = new Date().getTime() - new Date(data[key].createdAt).getTime();
        if (time/1000 > 30) this.restaurants[key].deleteDisabled = true;
        else this.restaurants[key].deleteDisabled = false;
        // this.rate.push({rating: 0, customer:"", comment : ""});   //Inline rating is not needed.
      }
    })
  }

  readReviews(i){
    console.log(this.restaurants[i]._id);
    let id = this.restaurants[i]._id;
    this._router.navigate(['/restaurants/'+id]);
  }
  edit(i){
    console.log(this.restaurants[i]._id);
    let id = this.restaurants[i]._id;
    this._router.navigate(['/restaurants/'+id+'/edit']);
  }
  delete(i){
    let id = this.restaurants[i]._id;
    console.log('------------------------------');
    console.log("mine: Delete this restaurant", this.restaurants[i].name);
    console.log(id);

    let observable = this._httpService.restaurantDelete(id);
    observable.subscribe(data => {  
      console.log("Result of invoking Newtask route:", data);
      console.log(data);
      this.loadAllRestaurants();
    })
  }
}
