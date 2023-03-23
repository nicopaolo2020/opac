import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';
import { NewsComponent } from './components/news/news.component';
import { RulesComponent } from './components/rules/rules.component';
import { SearchComponent } from './components/search/search.component';
import { ServicesComponent } from './components/services/services.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'mission-vission', component: MissionComponent },
  { path: 'announcements', component: NewsComponent },
  { path: 'rules-regulations', component: RulesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
