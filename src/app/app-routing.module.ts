import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLoginComponent } from './shared/web-login/web-login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateInvoiceComponent } from './shared/create-invoice/create-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

const routes: Routes = [
  { path: 'login', component: WebLoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'invoices', component: InvoiceComponent },
  { path: 'invoicesList', component: InvoiceListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
