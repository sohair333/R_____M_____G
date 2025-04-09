import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  constructor(private router:Router){}
  goHome(){
    this.router.navigate(['/invoicesList'])

  }
}
