import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'home',
    component: MainContentComponent,
    title: 'Main Content',
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    title: 'Register Form',
  },
  {
    path: 'login',
    component: LoginFormComponent,
    title: 'Login Form'
  },
];
