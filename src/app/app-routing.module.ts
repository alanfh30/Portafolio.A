import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'curriculum', component:CurriculumComponent},
  {path: 'contacto', component:ContactoComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule {}
