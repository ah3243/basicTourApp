import { Routes, RouterModule } from '@angular/router';

import { MapComponent }         from './map.component';
import { AppComponent }         from './app.component';
import { ImgLibrary }           from './img-library.component';
import { Login }                from './login.component';

const appRoutes: Routes = [
    {
        path: 'map',
        component: MapComponent
    },{
        path: 'img',
        component: ImgLibrary
    },
    {
        path: '',
        component: Login
    }
]

export const routing = RouterModule.forRoot(appRoutes);