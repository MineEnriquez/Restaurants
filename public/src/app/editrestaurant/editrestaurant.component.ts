import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent implements OnInit {
  editrestaurant: any= {name: "", cusine : "", };
  submitted: boolean;
  servererrors: any;
  requestresult: any;
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

  onSubmit(){
    console.log("mine: Edit CAKE", this.editrestaurant);
    this.submitted=true;
    let observable = this._httpService.restaurantEdit(this.id,this.editrestaurant);
    observable.subscribe(data => {  
      console.log("Result of invoking Newtask route:", data);
      this.requestresult = data;
      this.servererrors  = this.requestresult.errors;
      console.log(data);
      if (this.requestresult.ok)
       this._router.navigate(['/restaurants']);
       } 
   )
  }
  onCancel(){
    this._router.navigate(['/restaurants']);
  }

  fillupinfo() {
    console.log("Adding reviews - GATHER information about one restaurant");
   
    //let observable = this._httpService.getById({ id: this.id });
    let observable = this._httpService.getById(this.id);
    observable.subscribe(info => {
      console.log(info);
      let gotdata: any = info;
      this.editrestaurant.name = gotdata.data.name;
      this.editrestaurant.cusine = gotdata.data.cusine;
      console.log(this.editrestaurant);

      //console.log("-------Got our data! ", this.id, this.selectedrestaurant)

    });
  }

}
