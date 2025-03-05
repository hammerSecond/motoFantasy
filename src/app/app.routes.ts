import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    {
        path:"",
        component: MainContentComponent,
        title: "Main Content",
    },
    {
        path:"register",
        component: RegisterFormComponent,
        title: "Register Form",
    }
];
