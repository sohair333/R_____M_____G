import { Component } from '@angular/core';
import { InvoiceService } from '../shared/services/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService,private router:Router) {}

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(data => {
      console.log(data,"data");
      
      this.invoices = data;
    });
  }
  createNewInvoice()
  {
    this.router.navigate(['/invoices'])
  }
  goHome(){
    this.router.navigate(['/home'])

  }
}
