import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/contentpages/home/home.component';
import { EmpleadosComponent } from './pages/contentpages/empleados/empleados.component';
import { AsistenciaComponent } from './pages/contentpages/asistencia/asistencia.component';
import { NoticiasComponent } from './pages/contentpages/noticias/noticias.component';
import { PeticionesComponent } from './pages/contentpages/peticiones/peticiones.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'asistencia', component: AsistenciaComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'peticiones', component: PeticionesComponent },
    { path:'**', component: HomeComponent, pathMatch:'full' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);