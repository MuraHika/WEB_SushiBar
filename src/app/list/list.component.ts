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
  }
  products: Array<Product> = [];

  update_list() {
    this.http.get('http://localhost:5000/api/1.0/products/getList').subscribe((response: any) => {
      console.log("response", response);
      this.products = [];
      response.forEach(element => {
        this.products.push(element);
      });
    });
    console.log("debug", this.products);
  }
}