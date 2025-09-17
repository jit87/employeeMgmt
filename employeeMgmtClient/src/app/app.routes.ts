import { Routes } from '@angular/router';
import { HomeComponent } from './pages/contentpages/home/home.component';
import { LoginComponent } from './pages/authpages/login/login.component';
import { RegistroComponent } from './pages/authpages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'empleados',
        loadChildren: () => import('./pages/contentpages/empleados/empleados.module').then(m => m.EmpleadosModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'asistencia',
        loadChildren: () => import('./pages/contentpages/asistencia/asistencia.module').then(m => m.AsistenciaModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'noticias',
        loadChildren: () => import('./pages/contentpages/noticias/noticias.module').then(m => m.NoticiasModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'peticiones',
        loadChildren: () => import('./pages/contentpages/peticiones/peticiones.module').then(m => m.PeticionesModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: HomeComponent, pathMatch: 'full'
    }
];


