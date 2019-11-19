import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from "../environments/environment";
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              environment.defaultTheme
             ]  
})
export class AppComponent implements OnInit {
  title = 'public';
  theme = environment.defaultTheme;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(){
    this._router.navigate(['/restaurants']);
   this.setTheme("minty"); 
  }
  resolveTheme(event: Event){
      let theElement = <HTMLInputElement>event.target;
      this.setTheme(theElement.value);
  }
  setTheme(theme) {
    this.theme = `https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/${theme}/bootstrap.min.css `;
    console.log(theme);
    window.localStorage.setItem('theme', JSON.stringify(theme));
    let link = document.getElementById("css-theme");
   
    if(link) {
      link['href'] = this.theme;
    } else {
      let node = document.createElement('link');
      node.href = this.theme; // insert url in between quotes
      node.rel = 'stylesheet';
      node.id = 'css-theme';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
