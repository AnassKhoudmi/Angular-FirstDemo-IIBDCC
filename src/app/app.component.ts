import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'FirstApp1';

  public currentRoute : any;

  constructor(private router : Router){
  }

  gotoHome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home");
  }

  gotoproducts() {
    this.currentRoute = "products";
    this.router.navigateByUrl("/products");
  }
}
