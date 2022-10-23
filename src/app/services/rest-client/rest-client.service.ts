import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  url: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  get(endpoint: string, params?: any, options?: HttpParams) {
    return this.http.get(this.url + endpoint);
  }

  basePost(endpoint: string, body: any, options?: any) {
    return this.http.post(endpoint, body, options);
  }

  postOption(endpoint: string, body: any, options: any) {
    return this.http.post(this.url + "/" + endpoint, body, options);
  }
  post(endpoint: string, body: any, options?: any) {
    console.log('URL', this.url + endpoint)
    return this.http.post(this.url + endpoint, body);
  }
  postToken(endpoint: string, body: any, options?: any) {
    return this.http.post(this.url + endpoint, body);
  }

  postPublick(endpoint: string, body?: any) {
    return this.http.post(this.url + endpoint, body);
  }

  postCompagnie(endpoint: string, body: any, options?: any) {
    const headers = new HttpHeaders({
      'login': options
    })
    return this.http.post(this.url + endpoint, body, {
      headers: headers
    });
  }
  executeExportFile(endpoint: string, body: any) {
    return this.http
      .post(this.url + endpoint, body, {
        responseType: "arraybuffer"
      });
  }
}
