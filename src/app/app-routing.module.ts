import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { ExploreComponentComponent } from './explore-component/explore-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Map3dComponent } from './map3d/map3d.component';
import { FooterComponent } from './footer/footer.component';
import { TravelAgencyComponent } from './Travel-agency/travel-agency.component';
import { AbonementComponent } from './abonement/abonement.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'explore', component: ExploreComponentComponent },
  { path: 'destinations', component: DestinationCardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'help', component: HelpComponentComponent },
  { path: 'travel-agency', component: TravelAgencyComponent },
  {path: 'abonement', component: AbonementComponent},
   {path :'register', component: RegisterComponent},
  {path :'login', component: LoginComponent},
  {path :'contact', component: ContactComponent},
{path :'reservation', component: ReservationComponent},
{path :'paiement', component: PaiementComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,// Pass the defined routes once
    HomePageComponent,
    DestinationCardComponent,
    Map3dComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
