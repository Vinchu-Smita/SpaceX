import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LaunchModelBoxComponent } from './launch-model-box/launch-model-box.component';
import { LaunchesComponent } from './launches/launches.component';

export const  routes: Routes = [
  {path:"",component:LaunchesComponent},
  {path:"launches/:start/:end/:launchType",component:LaunchesComponent},
  {path:"launches/:launchType",component:LaunchesComponent}
  // {path:"launches/:id",component:LaunchesComponent},

  // {path:"launchmodel/:flight_number",component:LaunchModelBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
