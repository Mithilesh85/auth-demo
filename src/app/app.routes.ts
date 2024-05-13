import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: LoginComponent, title: "Login" },
    { path: "signup", component: SignupComponent, title: "Signup" },
    { path: "forgot-password", component: ForgotPasswordComponent, title: "Forgot Password" },
    { path: "reset-password", component: ResetPasswordComponent, title: "Reset Password" },
];
