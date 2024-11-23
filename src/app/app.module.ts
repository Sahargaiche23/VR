import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Import other components and modules here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ExploreComponentComponent } from './explore-component/explore-component.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Map3dComponent } from './map3d/map3d.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { CommonModule } from '@angular/common';
import { TravelAgencyComponent } from './Travel-agency/travel-agency.component';
import { AbonementComponent } from './abonement/abonement.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { PaiementComponent } from './paiement/paiement.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditProfileComponent,
    ExploreComponentComponent,
    HelpComponentComponent,
    TravelAgencyComponent,
    AbonementComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ReservationComponent,
    PaiementComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule, // Ajouter FormsModule ici
    HomePageComponent,
    DestinationCardComponent,
    Map3dComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,  // <-- Import CommonModule here

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

