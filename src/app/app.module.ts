import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NEWComponent } from './new/new.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ReusecomComponent } from './reusecom/reusecom.component';
import { ChildcomComponent } from './childcom/childcom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { RedElDirective } from './red-el.directive';
import { ServiceFooterComponent } from './service-footer/service-footer.component';
import { FooterComponent } from './footer/footer.component'




@NgModule({
  declarations: [
    AppComponent,
    NEWComponent,
    HeaderComponent,
    ChildComponent,
    ReusecomComponent,
    ChildcomComponent,
    UsdInrPipe,
    RedElDirective,
    ServiceFooterComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
