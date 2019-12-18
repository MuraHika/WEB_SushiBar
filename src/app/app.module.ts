import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { AdminkaComponent } from './adminka/adminka.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminGuard }   from './guard';
import { loginGuard }   from './login_guard';
import { FileStoreComponent } from './file-store/file-store.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'list', component: ListComponent },
  { path: 'adminka', component: AdminkaComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'registration', component: RegistrationComponent},
  { path: 'fileStore', component: FileStoreComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MainComponent,
    AdminkaComponent,
    LoginComponent,
    RegistrationComponent,
    FileStoreComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdminGuard, loginGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
