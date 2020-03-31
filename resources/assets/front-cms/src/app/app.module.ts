import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SurfistaDialogComponent } from './surfista-dialog/surfista-dialog.component';
import { BateriaDialogComponent } from './bateria-dialog/bateria-dialog.component';
import { SurfistaComponent } from './surfista/surfista.component';
import { BateriaComponent } from './bateria/bateria.component';
import { OndaDialogComponent } from './onda-dialog/onda-dialog.component';
import { OndaComponent } from './onda/onda.component';
import { NotaComponent } from './nota/nota.component';
import { NotaDialogComponent } from './nota-dialog/nota-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SurfistaDialogComponent,
    BateriaDialogComponent,
    SurfistaComponent,
    BateriaComponent,
    OndaDialogComponent,
    OndaComponent,
    NotaComponent,
    NotaDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    // MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,

  ],
  providers: [
    
  ],
  entryComponents : [
    SurfistaDialogComponent,
    BateriaDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }