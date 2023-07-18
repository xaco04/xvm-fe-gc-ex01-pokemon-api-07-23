import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CharacterComponent } from './components/character/character/character.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'character',
    component: CharacterComponent
  },
  {
    path:'characterDetail/:id',
    component: CharacterDetailComponent
  },
  {
    path:'characterList',
    component: CharacterListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
