import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import {Subscription} from 'rxjs/Subscription';

// import {MessageService} from './../MessageService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [HttpClient]
})
export class MainComponent implements OnInit  {
  message: any;
  constructor(private http: HttpClient) { }
  str: string;
  products: Array<string> = [];

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
      this.http.post('http://localhost:5000/api/1.0/products/getUser', str, {withCredentials: true}).subscribe((response: any) => {
      console.log("response", response);
      this.products = [];
      response.forEach(element => {
        this.products.push(element);
      });
    });
    }
  }
}