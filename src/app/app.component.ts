import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { User } from './user_info';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient, private router: Router){
    router.events.subscribe((x: object)=>{
      if(x instanceof NavigationEnd){
        this.http.post('http://localhost:5000/api/1.0/products/getUser', null, {
          withCredentials: true
        }).subscribe(
          (data:string) => {
            this.SEE(data, true);
            User.Info.Name = data.split(' ')[0];
            User.Info.Role = data.split(' ')[1];
          }, 
          (error: any) => {
            this.SEE("", false);
          });
      }
    })
  }

    SEE(name:string, visible:boolean) {
      if(visible){
        // setTimeout(()=>this.SEE("Name",false), 1000);
        document.getElementById("UserInfo").innerText = name;
        document.getElementById("UserInfo").style.visibility = "visible";
      } else{
        // setTimeout(()=>this.SEE("Name",true), 1000);
        document.getElementById("UserInfo").style.visibility = "hidden";
      }
    }
}

