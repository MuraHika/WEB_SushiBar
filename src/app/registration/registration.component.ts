import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Account } from './../Account'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [HttpClient]
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  accounts: Array<Account> = [];
  receivedData: Account;
  done: boolean = false;
  account: Account;
  str: string;
  ngOnInit() {
  }
  register(e_mail: string, hash_password: string, user_name: string) {
    console.log(e_mail, hash_password, user_name)
    let account = new Account(e_mail, hash_password, user_name)
    console.log(this.account)
    this.http.post('http://localhost:5000/api/1.0/account/register', account).subscribe(
    );
  }
}
