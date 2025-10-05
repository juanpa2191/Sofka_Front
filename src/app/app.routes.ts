import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accounts', component: AccountsListComponent },
  { path: 'accounts/:id', component: AccountDetailsComponent },
  { path: '**', redirectTo: '/login' }
];
