import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxPopupModule, DxSwitchModule, DxTabsModule, DxToastModule, } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ClientComponentComponent } from './pages/client-component/client-component.component';
import { ProductComponentComponent } from './pages/product-component/product-component.component';
import { BillComponentComponent } from './pages/bill-component/bill-component.component';
import { PayComponentComponent } from './pages/pay-component/pay-component.component';
import { EditClientComponentComponent } from './pages/client-component/edit-client-component/edit-client-component.component';
import { CreateClientComponentComponent } from './pages/client-component/create-client-component/create-client-component.component';
import { CreateProductComponentComponent } from './pages/product-component/create-product-component/create-product-component.component';
import { EditProductComponentComponent } from './pages/product-component/edit-product-component/edit-product-component.component';
import { InfoBillComponentComponent } from './pages/bill-component/info-bill-component/info-bill-component.component';
import { ProductBillComponentComponent } from './pages/bill-component/product-bill-component/product-bill-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ClientComponentComponent,
    ProductComponentComponent,
    BillComponentComponent,
    PayComponentComponent,
    EditClientComponentComponent,
    CreateClientComponentComponent,
    CreateProductComponentComponent,
    EditProductComponentComponent,
    InfoBillComponentComponent,
    ProductBillComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabsModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule,
    DxFormModule,
    DxSwitchModule,
    HttpClientModule,
    DxToastModule,
    DxDateBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
