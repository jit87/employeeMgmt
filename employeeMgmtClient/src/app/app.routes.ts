import { Routes } from '@angular/router';
import { HomeComponent } from './pages/contentpages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'empleados',
        loadChildren: () => import('./pages/contentpages/empleados/empleados.module').then(m => m.EmpleadosModule)
     },
    {
        path: 'asistencia',
        loadChildren: () => import('./pages/contentpages/asistencia/asistencia.module').then(m => m.AsistenciaModule)
     },
    {
        path: 'noticias',
        loadChildren: () => import('./pages/contentpages/noticias/noticias.module').then(m => m.NoticiasModule)
    },
    {
        path: 'peticiones',
        loadChildren: () => import('./pages/contentpages/peticiones/peticiones.module').then(m => m.PeticionesModule)
     },
    {
        path: '**',
        component: HomeComponent, pathMatch: 'full'
    }
];


