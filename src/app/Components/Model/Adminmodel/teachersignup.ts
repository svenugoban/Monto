export class Teachersignup {

    username: string;
    email: any = '';
    password: any;
    role: any ;

    constructor(username: string, email: any, password: any, role: any) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['teacher'];

    }
}
