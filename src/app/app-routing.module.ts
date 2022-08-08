import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesafioComponent } from './desafio/desafio-component';
import { HomeComponent } from './home/home-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'desafio', component: DesafioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
