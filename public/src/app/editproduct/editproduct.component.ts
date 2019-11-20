import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  editingproduct: any = { name: "", quantity: 0, price: 0.0 };

  submitted: boolean;
  servererrors: any;
  requestresult: any;
  quantityError: any;
  priceError: any;
  quantityInvalid: boolean = false;
  priceInvalid: boolean = false;
  isNotZero : Boolean;

  i: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("retrieving information for....")
      console.log(params['id'])
      this.i = params['id'];
    });
    this.fillupinfo();
  }
  fillupinfo() {
    //this.products = this._allproducts.loadAllProducts();

    let observable = this._httpService.getProducts();
    observable.subscribe(data => {  
      let products = data;
      this.editingproduct = products[this.i];
      console.log("-==========");
      
      if(Number(this.editingproduct.quantity) > 0)
       {
         this.isNotZero = Boolean(false);
         console.log(this.isNotZero);
      }
      else{
        this.isNotZero = Boolean(true);
        console.log(this.isNotZero);
      }
    })
  }

  onSubmit() {
    console.log("mine: Edit Product", this.editingproduct);
    this.submitted = true;
    let observable = this._httpService.productEdit(this.editingproduct._id, this.editingproduct);
    observable.subscribe(data => {
      console.log("======================Result of invoking Newtask route:", data);
      this.requestresult = data;
      this.servererrors = this.requestresult.errors;
      if (this.requestresult.ok == 1)
        this._router.navigate(['/products']);
    }
    )
  }
  ValidateNumber(event: Event) {
    let valor = <HTMLInputElement>event.target;
    console.log(valor.name);
    console.log(valor.value)
    if (valor.name == "editingproduct.price") { 
      if (Number(valor.value) < 0) {
        this.priceError = "Price must be more than zero";
        this.priceInvalid = Boolean(true); 
      }
      else {
        this.priceError = "";
        this.priceInvalid = Boolean(false); 
      }
    }
    else if (valor.name == "editingproduct.quantity") { 
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
  onBack() {
    this._router.navigate(['/products']);
  }
  onReset(){
    this.fillupinfo();
  }
}
