import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { MapComponent }  from './map.component';
import { ImgLibrary }    from './img-library.component';
import { Login }         from './login.component';

@NgModule({
  imports:      [ BrowserModule, 
                  routing
                ],

  declarations: [ AppComponent,
                  MapComponent,
                  ImgLibrary,
                  Login                
                 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
