import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { CreateMinionComponentComponent } from './create-minion-component/create-minion-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponentComponent,
    LoginComponentComponent,
    HeaderComponentComponent,
    RegisterComponentComponent,
    CreateMinionComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponentComponent
      },
      {
        path: 'register',
        component: RegisterComponentComponent
      },
      {
        path: 'create',
        component: CreateMinionComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
