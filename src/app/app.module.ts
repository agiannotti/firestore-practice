import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore/';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AddComponent } from './_components/add/add.component';
import { DetailsComponent } from './_components/details/details.component';
import { ListComponent } from './_components/list/list.component';

@NgModule({
  declarations: [AppComponent, AddComponent, DetailsComponent, ListComponent],
  imports: [BrowserModule, AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
