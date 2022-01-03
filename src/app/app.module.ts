import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import {NgxPaginationModule, PaginationControlsComponent, PaginationControlsDirective} from 'ngx-pagination';
import { DatatimePipe } from './datatime.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GenericListFilterComponent, GenericListFilterModule } from 'generic-list-filter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {  MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    DatatimePipe,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClient,
    NgxPaginationModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatDialogModule,
    // MatDialog
    GenericListFilterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    // MatNativeDateModule
    NgxDaterangepickerMd.forRoot() ,
    ModalModule.forRoot(),
    MatTableModule,
    RouterModule
   ],

  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
