import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../user_info';
import { Product } from './../Product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [HttpClient]
})
export class MainComponent implements OnInit {
  message: any;
  constructor(private http: HttpClient, private router: Router) {
  }
  str: string;
  products: Array<string> = [];
  search_objects: Array<Product> = [];

  ngOnInit() {
    this.getCookie("token")
  }

  getCookie(name: string) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {

      let str = parts.pop().split(";").shift();
      console.log("TOKEN:")
      console.log(str)
      this.http.post('http://localhost:5000/api/1.0/products/getUser', str, { withCredentials: true }).subscribe((response: any) => {
        console.log("response", response);
        this.products = [];
        response.forEach(element => {
          this.products.push(element);
        });
      });
    }
  }

  exit() {
    this.delete_cookie("token");
    location.reload();
  }

  delete_cookie(cookie_name) {
    var cookie_data = new Date();
    cookie_data.setTime(cookie_data.getTime() - 1);
    document.cookie = cookie_name += "=; expires=" + cookie_data.toTimeString();
  }

  search(search_name){
    this.http.post('http://localhost:5000/api/1.0/products/getList/'+ search_name, { withCredentials: true }).subscribe((response: any) => {
        console.log("response", response);
        this.search_objects = [];
        response.forEach(element => {
          this.search_objects.push(element);
        });
      });
      console.log("debug",this.search_objects);
  }
}