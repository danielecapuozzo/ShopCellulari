import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule} from "@angular/material";
import {LocalStorageModule} from "angular-2-local-storage";
import {CreditCardService} from "./provider/credit-card.service";
import {UserService} from "./provider/user.service";
import {ProdottoService} from "./provider/prodotto.service";
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import { DescriptionComponent } from './description/description.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { AddCardComponent } from './add-card/add-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DescriptionComponent,
    LoginComponent,
    RegisterComponent,
    ListCardsComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,

    MatCheckboxModule,
    MatCardModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [CreditCardService,UserService,ProdottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
