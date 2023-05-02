import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path:'category', component: CategoriasComponent},
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
