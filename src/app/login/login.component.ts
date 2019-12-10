import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Account } from './../Account';
import { Router } from '@angular/router';
// import {MessageService} from './../MessageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [HttpClient]
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  accounts: Array<Account> = [];
  receivedData: Account;
  done: boolean = false;
  account: Account;
  str: string;
  ngOnInit() {
  }

  login(e_mail: string, hash_password: string) {
    console.log(e_mail, hash_password)
    const body ={ e_mail , hash_password};
    console.log(body)
    this.http.post('http://localhost:5000/api/1.0/account/autorize', body, {withCredentials: true}).subscribe((data:string) => {
      if(data == 'ok'){
        this.router.navigate(['/']);
        console.log("--------------------------------")
        this.getCookie("token");
        // this.messageService.sendMessage('Message from Home Component to App Component!');
        console.log("DONE")
      }
      console.log(data)
    });
  }

  getCookie(name: string) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      console.log(parts.pop().split(";").shift())
      return parts.pop().split(";").shift();
    }
  }

//   sendMessage(): void {
//     // отправляем сообщения ко всем кто подписался через observable subject
//     this.messageService.sendMessage('Message from Home Component to App Component!');
//   }

//   clearMessage(): void {
//     // очищаем сообщения
//     this.messageService.clearMessage();
// }
}
