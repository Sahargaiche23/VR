import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  // Liste des destinations disponibles
  destinations = [
    { name: 'Paris VR', id: 1 },
    { name: 'Tokyo VR', id: 2 },
    { name: 'New York VR', id: 3 },
    { name: 'Dubai VR', id: 4 },
  ];

  // Objet de réservation
  reservation = {
    destination: '',
    date: '',
    people: 1,
  };

  // Méthode de soumission du formulaire
  onSubmit() {
    if (this.reservation.destination && this.reservation.date && this.reservation.people) {
      console.log('Réservation confirmée:', this.reservation);
      alert('Votre réservation a été enregistrée avec succès !');
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}
