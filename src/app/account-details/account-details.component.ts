import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent implements OnInit {
  account: any;
  transactions: any[] = [];
  transactionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadAccount(id);
    this.loadTransactions(id);
  }

  loadAccount(id: number): void {
    this.apiService.getAccount(id).subscribe({
      next: (data) => {
        this.account = data;
      },
      error: (err) => {
        console.error('Error loading account', err);
      }
    });
  }

  loadTransactions(accountId: number): void {
    this.apiService.getTransactions(accountId).subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        console.error('Error loading transactions', err);
      }
    });
  }

  onSubmitTransaction(): void {
    if (this.transactionForm.valid && this.account) {
      const transaction = {
        accountId: this.account.id,
        ...this.transactionForm.value
      };
      this.apiService.createTransaction(transaction).subscribe({
        next: () => {
          this.transactionForm.reset();
          this.loadAccount(this.account.id);
          this.loadTransactions(this.account.id);
        },
        error: (err) => {
          console.error('Error creating transaction', err);
        }
      });
    }
  }
}
