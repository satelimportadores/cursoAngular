import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaHackComponent } from './hola-hack/hola-hack.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const routes: Route[]=[
  {path: '',component:AppComponent},
  {path: 'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HolaHackComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
