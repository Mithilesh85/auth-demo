import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequestBodyType } from '../types/singup-request-body.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signUpRequestBody: SignUpRequestBodyType) {
    // this.http.post()
  }
}
