import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  payment = {
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logique de traitement du paiement (simulée ici)
    console.log('Payment Info:', this.payment);
    
    // Simuler une redirection après paiement
    this.router.navigate(['/confirmation']);
  }
}
