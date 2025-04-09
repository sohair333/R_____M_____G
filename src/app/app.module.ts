import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebLoginComponent } from './shared/web-login/web-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { LimitWordsPipe } from './shared/pipes/limit-words.pipe';
import { ProductEditComponent } from './shared/product-edit/product-edit.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CreateInvoiceComponent } from './shared/create-invoice/create-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
@NgModule({
  declarations: [
    AppComponent,
    WebLoginComponent,
    HomeComponent,
    ProductCardComponent,
    ProductListComponent,
    LimitWordsPipe,
    ProductEditComponent,
    CreateInvoiceComponent,
    InvoiceComponent,
    InvoiceListComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule   
  ],
  providers: [ProductsService,MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
