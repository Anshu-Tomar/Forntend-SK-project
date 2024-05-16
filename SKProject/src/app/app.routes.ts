import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)},
    {path:'user', loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
    {path:"**", component:PageNotFoundComponent}

];
