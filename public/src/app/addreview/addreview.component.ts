import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  selectedrestaurant: any = { name: "", cusine: "", averagerating: "", arrayratings: [{ customer: "", rating: 0, comment: "" }] };
 
  rate: any = { customer: "", rating: "", comment: "" };
  restaurantname: any;
  id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("retrieving information for....")
      console.log(params['id'])
      this.id = params['id'];
    });
    this.fillupinfo();
  }

  fillupinfo() {
    console.log("Adding reviews - GATHER information about one restaurant");
   
    //let observable = this._httpService.getById({ id: this.id });
    let observable = this._httpService.getById(this.id);
    observable.subscribe(info => {
      console.log(info);
      let gotdata: any = info;
      this.selectedrestaurant = gotdata.data;
      this.restaurantname = this.selectedrestaurant.name;
      console.log(this.selectedrestaurant);

      //console.log("-------Got our data! ", this.id, this.selectedrestaurant)

    });
  }

  rateRestaurant(){
    console.log(this.id);
    console.log(this.rate);
    this.rate;
    let observable = this._httpService.rateRestaurant(this.id, this.rate);
    observable.subscribe(data => {  
      console.log("Result of requested transaction (rate restaurant):");
      console.log(data);
      this._router.navigate(['/restaurants/' + this.id]);
    })
  }

}
