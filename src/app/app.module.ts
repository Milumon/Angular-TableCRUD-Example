import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import{ HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { SliderComponent } from './inicio/slider/slider.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { ShippingComponent } from './inicio/shipping/shipping.component';
import { ProductComponent } from './inicio/product/product.component';
import { NewsletterComponent } from './inicio/newsletter/newsletter.component';
import { BrandComponent } from './inicio/brand/brand.component';
import { OfferComponent } from './inicio/offer/offer.component';
import { HomeComponent } from './inicio/home/home.component';
import { RickComponent } from './component/rick/rick.component';
import { RickIdComponent } from './component/rick-id/rick-id.component';
import { SeleccionComponent } from './component/seleccion/seleccion.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { SeleccionDetalleComponent } from './component/seleccion-detalle/seleccion-detalle.component';
import { SeleccionPosicionComponent } from './component/seleccion-posicion/seleccion-posicion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainNavComponent,
    SliderComponent,
    BannerComponent,
    ShippingComponent,
    ProductComponent,
    NewsletterComponent,
    BrandComponent,
    OfferComponent,
    HomeComponent,
    RickComponent,
    RickIdComponent,
    SeleccionComponent,
    TiendaComponent,
    SeleccionDetalleComponent,
    SeleccionPosicionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    OrderModule,
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
