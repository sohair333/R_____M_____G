import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent {
  invoiceNumber = '';
  billTo = '';
  shipTo = '';
  from = '';
  date = '';
  paymentTerms = '';
  dueDate = '';
  poNumber = '';
  notes = '';
  terms = '';
  tax = 0;
  discount = 0;
  shipping = 0;
  amountPaid = 0;

  showDiscount = false;
  showShipping = false;

  items = [
    { description: '', quantity: 1, rate: 0 }
  ];
  constructor(private invoiceService: InvoiceService, private router: Router){}
  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  }

  get total(): number {
    let total = this.subtotal;
    total += this.subtotal * (this.tax / 100);
    if (this.showDiscount) total -= this.discount;
    if (this.showShipping) total += this.shipping;
    return total;
  }

  get balanceDue(): number {
    return this.total - this.amountPaid;
  }

  addItem() {
    this.items.push({ description: '', quantity: 1, rate: 0 });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  calculateTotal() {
  }

  toggleDiscount(show: boolean) {
    this.showDiscount = show;
    if (!show) this.discount = 0;
  }
  logoDataUrl: string | null = null;

  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoDataUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  toggleShipping(show: boolean) {
    this.showShipping = show;
    if (!show) this.shipping = 0;
  }

  createInvoice() {
    const invoice = {
      from: this.from,
      billTo: this.billTo,
      shipTo: this.shipTo,
      date: this.date,
      dueDate: this.dueDate,
      invoiceNumber: this.invoiceNumber,
      items: this.items,
      subtotal: this.subtotal,
      tax: this.tax,
      discount: this.discount,
      shipping: this.shipping,
      total: this.total,
      amountPaid: this.amountPaid,
      balanceDue: this.balanceDue,
      notes: this.notes,
      terms: this.terms,
      logo: this.logoDataUrl
    };
  
    this.invoiceService.createInvoice(invoice).subscribe(() => {
      this.router.navigate(['/invoicesList']); 
     
    });
  }
}
