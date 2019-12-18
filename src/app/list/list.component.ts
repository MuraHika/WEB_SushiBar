import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './../Product'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  providers: [HttpClient]
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.update_list();
    let ws = new WebSocket("ws://localhost:5000/event");
    ws.onopen = () => {
      ws.onmessage = (event) => {
        console.log(event);
        let data = JSON.parse(event.data);
        if (data.event == "changes_product")
          this.update_list()
      };
    };
  }
  products: Array<Product> = [];

  update_list() {
    this.http.post('http://localhost:5000/api/1.0/products/getList/', {withCredentials: true}).subscribe((response: any) => {
      console.log("response", response);
      this.products = [];
      response.forEach(element => {
        this.products.push(element);
      });
    });
    console.log("debug",this.products);
  }
}