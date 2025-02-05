import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/contentpages/home/home.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path:'**', component: HomeComponent }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);