import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newproduct: any = { name: "", quantity: 0, price: 0.0, myid: 0 };
  submitted: boolean;
  servererrors: any;
  requestresult: any;
  quantityError: any;
  priceError: any;
  quantityInvalid: boolean = true;
  priceInvalid: boolean = true;
  latest_id: any=0;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {  
      let products: any;
      products = data;
      let thelatest: any;
      thelatest = products[products.length -1];

      this.latest_id = thelatest.myid;
      this.latest_id ++;
      console.log( "THE LATEST ID:",  this.latest_id )
    })

  }
  onSubmit() {
    this.newproduct.myid = this.latest_id;
    console.log("mine: New Product", this.newproduct);
    this.submitted = true;
    let observable = this._httpService.newProduct(this.newproduct);
    observable.subscribe(data => {
      console.log("Result of invoking Newtask route:", data);
      this.requestresult = data;
      this.servererrors = this.requestresult.errors;
      if (this.requestresult._id)
        this._router.navigate(['/products']);
    }
    )
  }
  ValidateNumber(event: Event) {
    let valor = <HTMLInputElement>event.target;
    console.log(valor.name);
    console.log(valor.value)
    if (valor.name == "newproduct.price") { 
      if (Number(valor.value) < 0) {
        this.priceError = "Price must be more than zero";
        this.priceInvalid = Boolean(true); 
      }
      else {
        this.priceError = "";
        this.priceInvalid = Boolean(false); 
      }
    }
    else if (valor.name == "newproduct.quantity") { 
      if (Number(valor.value) < 0) {
        this.quantityError = "Quantity must be more than zero";
        this.quantityInvalid = Boolean(true); 
      }
      else{
        this.quantityError = "";
        this.quantityInvalid = Boolean(false); 
      }
    }
  }
  onCancel() {
    this._router.navigate(['/products']);
  }
}
