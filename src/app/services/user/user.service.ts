import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, lastValueFrom, map } from 'rxjs';
import { RestClientService } from '../rest-client/rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any = {};
  token: string = '';
  private LOGIN_REST_URL: string = 'backoffice/user/authenticate'
  constructor(private router: Router, private restClient: RestClientService) { }

  async signIn(credentials: { phoneNumber: string, password: string }) {
    return await lastValueFrom(
      this.restClient.postOption(this.LOGIN_REST_URL, credentials, {})
        .pipe(
          map((response) => response),
          map(data => data),
          catchError(e => {
            console.error({ e })
            return e
            //throw new Error({ hasError: true, datas: e.response ? e.response.data : [], status: e.response ? e.response.status : 500 });
          })
        )
    )
  }
  async signUp(datas: { fullname: string, phoneNumber: string, email: string, password: string }) {
    return await lastValueFrom(
      this.restClient.postOption(this.LOGIN_REST_URL, datas, {})
        .pipe(
          map((response) => response),
          map(data => data),
          catchError(e => {
            console.error({ e })
            return e
            //throw new Error({ hasError: true, datas: e.response ? e.response.data : [], status: e.response ? e.response.status : 500 });
          })
        )
    )
  }
  signOut() {
    //sessionStorage.removeItem('xyz-token');
    this.router.navigate(['/']);
  }
  getUser(): any {
    const user = JSON.parse(sessionStorage.getItem('xyz-token') || '{}');
    // if (user != null) {
    //   user.password = undefined;
    // } else { 
    //   return;
    // }
    return user;
  }
  setUser(user?: any) {
    this.user = user;
    sessionStorage.setItem('xyz-token', JSON.stringify(user));
    this.router.navigate(['/home/users']);
    return this.user;
  }

  isAuthenticated(): boolean {
    console.log('check is authenticated');
    const user = JSON.parse(sessionStorage.getItem('xyz-token') || '{}');
    if (user == null) {
      this.router.navigate(['/auth/signin-v2']);
      return false;
    }
    return true;
  }
  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem('baear-token', JSON.stringify(token));
    return this.token;
  }

  getToken(): any {
    const token = JSON.parse(sessionStorage.getItem('baear-token') || '');
    return token;
  }
}
