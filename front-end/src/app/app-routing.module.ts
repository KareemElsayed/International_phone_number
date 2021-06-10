import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListphonenumberComponent } from './listphonenumber/listphonenumber.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', component: ListphonenumberComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
