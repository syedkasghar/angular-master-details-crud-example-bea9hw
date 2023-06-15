import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const loginModule = () =>
  import('./login/login.module').then((x) => x.LoginModule);

const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);

const devicesModule = () =>
  import('./devices/devices.module').then((x) => x.DevicesModule);

const incidentsModule = () =>
  import('./incidents/incidents.module').then((x) => x.IncidentsModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadChildren: loginModule },
  { path: 'devices', loadChildren: devicesModule },
  { path: 'incidents', loadChildren: incidentsModule },
  { path: 'users', loadChildren: usersModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
