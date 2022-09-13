import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { ValorankComponent } from './components/valorank/valorank.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'valorankweb', component: ValorankComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
