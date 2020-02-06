import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }