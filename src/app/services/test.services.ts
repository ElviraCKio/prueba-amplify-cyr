import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ResponseModel from '../model/ResponseModel';


@Injectable({
  providedIn: 'root',
})
export class TestService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(
      `https://vu3cpov8r3.execute-api.us-east-2.amazonaws.com/desarrollo`
    );
  }


}
