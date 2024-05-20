import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBooksComponent } from './components/my-books/my-books.component';

export const routes: Routes = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: LoginComponent, title: "Login | SBN" },
    { path: "signup", component: SignupComponent, title: "Signup | SBN" },
    { path: "forgot-password", component: ForgotPasswordComponent, title: "Forgot Password | SBN" },
    { path: "reset-password", component: ResetPasswordComponent, title: "Reset Password | SBN" },
    { path: "dashboard", component: DashboardComponent, title: "Dashboard | SBN", data: { isDashboardPage: true } },
    { path: "dashboard/my-books", component: MyBooksComponent, title: "My Books | SBN", data: { isDashboardPage: true } },
];
