export class Account {
    e_mail: string;
    hash_password: string;
    user_name: string;
    constructor(e_mail: string, hash_password: string, user_name: string) {
        this.e_mail = e_mail;
        this.hash_password = hash_password;
        this.user_name = user_name;
    }
}