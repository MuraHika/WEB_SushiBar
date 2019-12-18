import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './../Product';

@Component({
  selector: 'app-adminka',
  templateUrl: './adminka.component.html',
  styleUrls: ['./adminka.component.less'],
  providers: [HttpClient]
})
export class AdminkaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: Array<Product> = [];
  done: boolean = false;
  product: Product;
  str: string;
  ngOnInit() {
    this.update_list();
  }

  submit(naming: string, type_product: string, composition: string, weight: number, cost: number) {
    console.log(naming, type_product, composition, weight, cost)
    let product = new Product(naming, type_product, composition, weight, cost)
    console.log(this.product)
    this.http.post('http://localhost:5000/api/1.0/products/add', product, {withCredentials: true}).subscribe(
      (data)=>this.update_list());
  }

  delete(naming: string) {
    console.log(naming)
    let str = naming
    console.log(str)
    this.http.post('http://localhost:5000/api/1.0/products/delete', str, {withCredentials: true}).subscribe(
      (data)=>this.update_list()
    );
  }

  update(naming: string, type_product: string, composition: string, weight: number, cost: number) {
    console.log(naming)
    let product = new Product(naming, type_product, composition, weight, cost)
    console.log(this.str)
    this.http.post('http://localhost:5000/api/1.0/products/update', product, {withCredentials: true}).subscribe(
      (data)=>this.update_list()
    );
  }

  update_list(){
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