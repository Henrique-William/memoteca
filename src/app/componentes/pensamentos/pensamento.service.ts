import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/Common/http'

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }


}
