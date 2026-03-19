import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';
import { Proyectos } from './pages/proyectos/proyectos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'nosotros', component: Nosotros},
    { path: 'servicios', component: Servicios},
    { path: 'proyectos', component: Proyectos },
    { path: 'contacto', component: Contacto }


];
