import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './../Product'

@Component({
  selector: 'app-adminka',
  templateUrl: './adminka.component.html',
  styleUrls: ['./adminka.component.less'],
  providers: [HttpClient]
})
export class AdminkaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: Array<Product> = [];
  receivedData: Product;
  done: boolean = false;
  product: Product;
  str: string;
  ngOnInit() {
  }

  submit(naming: string, type_product: string, composition: string, weight: number) {
    console.log(naming, type_product, composition, weight)
    let product = new Product(naming, type_product, composition, weight)
    console.log(this.product)
    this.http.post('http://localhost:5000/api/1.0/products/add', product).subscribe(
    );
  }

  delete(naming: string) {
    console.log(naming)
    let str = naming
    console.log(str)
    this.http.post('http://localhost:5000/api/1.0/products/delete', str).subscribe();
  }

  update(naming: string, type_product: string, composition: string, weight: number) {
    console.log(naming)
    let product = new Product(naming, type_product, composition, weight)
    console.log(this.str)
    this.http.post('http://localhost:5000/api/1.0/products/update', product).subscribe();
  }

  // get(naming: string) {
  //   console.log(naming)
  //   this.str = naming
  //   console.log(this.str)
  //   this.httpService.GetProduct(this.str).subscribe(
  //     (data: Product) => { this.receivedData = data; this.done = true; },
  //     error => console.log(error)
  //   );
  // }

  update_list(){
    this.http.get('http://localhost:5000/api/1.0/products/getList').subscribe((response: any) => {
      console.log("response", response);
      this.products = [];
      response.forEach(element => {
        this.products.push(element);
      });
    });
    console.log("debug",this.products);
  }
}