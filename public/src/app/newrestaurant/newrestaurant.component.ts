import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {
  newrestaurant: any= {name: "", cusine : "", };
  submitted: boolean;
  servererrors: any;
  requestresult: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("mine: NEW CAKE", this.newrestaurant);
    this.submitted=true;
    let observable = this._httpService.newRestaurant(this.newrestaurant);
    observable.subscribe(data => {  
      console.log("Result of invoking Newtask route:", data);
      this.requestresult = data;
      this.servererrors  = this.requestresult.errors;
      if (this.requestresult._id)
       this._router.navigate(['/restaurants']);
       }
   )
  }
  onCancel(){
    this._router.navigate(['/restaurants']);
  }
}
