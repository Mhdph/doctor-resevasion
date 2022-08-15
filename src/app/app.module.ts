import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';
import { FooterComponent } from './footer/footer.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
@NgModule({
  declarations: [AppComponent, HerosectionComponent, CarouselComponent, FooterComponent, MainsectionComponent],
  imports: [BrowserModule, CarouselModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
