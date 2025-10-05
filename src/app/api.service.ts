import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3100';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAccounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/accounts`, { headers: this.getHeaders() });
  }

  getAccount(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/accounts/${id}`, { headers: this.getHeaders() });
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/accounts`, account, { headers: this.getHeaders() });
  }

  getTransactions(accountId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions/${accountId}`, { headers: this.getHeaders() });
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/transactions`, transaction, { headers: this.getHeaders() });
  }
}
