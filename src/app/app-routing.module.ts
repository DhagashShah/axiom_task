import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'',component:MenuComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'fav',component:FavComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
