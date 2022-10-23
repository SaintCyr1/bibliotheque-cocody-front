import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('credentials', this.credentials)
  }

}
