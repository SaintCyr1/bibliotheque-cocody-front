import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any = {
    phoneNumber: '' as string,
    password: '' as string
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log('credentials', this.credentials)
    const loginRequest = await this.userService.signIn(this.credentials)
    console.log({ loginRequest })
  }

}
